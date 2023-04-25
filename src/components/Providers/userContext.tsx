import { toast } from "react-toastify";
import { api } from "../../services/api";
import { createContext, useEffect } from "react";
import { TRegisterFormValues } from "../Form/RegisterForm/registerFormSchema";
import { useNavigate } from "react-router-dom";
import { TLoginFormValues } from "../Form/LoginForm/loginFormSchema";
import { AxiosError } from "axios";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userRegister: (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userLogout: () => void;
}

interface IUser {
  name: string;
  email: string;
  id: string;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN_KenzieBurguer");
    const id = localStorage.getItem("@USERID_KenzieBurguer");
    if (!token) {
      navigate("/");
    }
    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        navigate("/shop");
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    if (token && id) {
      userAutoLogin();
    }
  }, []);

  const userLogin = async (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN_KenzieBurguer", data.accessToken);
      localStorage.setItem("@USERID_KenzieBurguer", data.user.id);
      toast.success("Login bem sucedido");
      navigate("/shop");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Usuário cadastrado");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN_KenzieBurguer");
    localStorage.removeItem("@USERID_KenzieBurguer");
    toast.warning("Logout bem sucedido!");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

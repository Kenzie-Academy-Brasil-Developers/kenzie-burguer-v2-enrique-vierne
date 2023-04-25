import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/userContext";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type="email"
        label="Seu e-mail"
        {...register("email")}
        disabled={loading}
        error={errors.email}
      />
      <Input
        type="password"
        label="Crie uma senha"
        {...register("password")}
        disabled={loading}
        error={errors.password}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;

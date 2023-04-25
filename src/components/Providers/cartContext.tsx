import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

interface ICartProviderProps {
  children: React.ReactNode;
}

export interface IFood {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ICartContext {
  foodList: IFood[];
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [foodList, setFoodList] = useState<IFood[]>([]);

  console.log("-> ~ foodList:", foodList);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN_KenzieBurguer");
    const loadFoodList = async () => {
      try {
        const { data } = await api.get<IFood[]>("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFoodList(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadFoodList();
  }, []);
  return (
    <CartContext.Provider value={{ foodList }}>{children}</CartContext.Provider>
  );
};

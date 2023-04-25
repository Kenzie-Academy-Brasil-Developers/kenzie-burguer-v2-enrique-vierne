import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

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
  cart: IFood[];
  setCart: React.Dispatch<React.SetStateAction<IFood[]>>;
  addFoodToCart: (food: IFood) => void;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [foodList, setFoodList] = useState<IFood[]>([]);
  const [cart, setCart] = useState<IFood[]>([]);

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

  const addFoodToCart = (newFood: IFood) => {
    const newCart = [...cart, newFood];
    if (!cart?.some((food) => food.id === newFood.id)) {
      toast.success("Produto adicionado ao carrinho!");
      setCart(newCart);
    } else {
      toast.warning("Produto duplicado!");
    }
  };

  return (
    <CartContext.Provider value={{ foodList, cart, setCart, addFoodToCart }}>
      {children}
    </CartContext.Provider>
  );
};

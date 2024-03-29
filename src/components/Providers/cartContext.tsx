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

export interface ICartContext {
  foodList: IFood[];
  cart: IFood[];
  setCart: React.Dispatch<React.SetStateAction<IFood[]>>;
  addFoodToCart: (food: IFood) => void;
  removeFoodFromCart: (id: number) => void;
  clearCart: () => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  filteredProducts: IFood[];
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [foodList, setFoodList] = useState<IFood[]>([]);
  const [cart, setCart] = useState<IFood[]>([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

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
      } catch (error: any) {
        toast.error(error.message);
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

  const removeFoodFromCart = (id: number) => {
    const newCart = cart.filter((food) => food.id !== id);
    toast.warning("Produto excluído!");
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    toast.warning("Todos os produtos excluídos!");
  };

  const filteredProducts = foodList.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.price.toString() === search
  );

  return (
    <CartContext.Provider
      value={{
        foodList,
        cart,
        setCart,
        addFoodToCart,
        removeFoodFromCart,
        clearCart,
        search,
        setSearch,
        searchInput,
        setSearchInput,
        filteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { useContext } from "react";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { CartContext } from "../Providers/cartContext";

const ProductList = () => {
  const { foodList, filteredProducts, search, setSearch, setSearchInput } =
    useContext(CartContext);

  const currentProducts = search !== "" ? filteredProducts : foodList;

  /* const clearInput = () => {
    setSearch("");
    setSearchInput("");
  }; */
  return (
    <StyledProductList>
      {currentProducts.map((food) => {
        return <ProductCard key={food.id} food={food} />;
      })}
    </StyledProductList>
  );
};
export default ProductList;

import { useContext } from "react";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { CartContext } from "../Providers/cartContext";

const ProductList = () => {
  const { foodList } = useContext(CartContext);

  return (
    <StyledProductList>
      {foodList.map((food) => {
        return <ProductCard key={food.id} food={food} />;
      })}
    </StyledProductList>
  );
};
export default ProductList;

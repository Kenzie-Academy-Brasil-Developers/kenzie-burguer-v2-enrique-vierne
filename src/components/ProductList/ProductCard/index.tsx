import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { CartContext, IFood } from "../../Providers/cartContext";
import { useContext } from "react";

interface IProductCardProps {
  food: IFood;
}
const ProductCard = ({ food }: IProductCardProps) => {
  const { addFoodToCart } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src={food.img} alt="Hamburguer" />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {food.name}
        </StyledTitle>
        <StyledParagraph className="category">{food.category}</StyledParagraph>
        <StyledParagraph className="price">R${food.price}</StyledParagraph>
        <StyledButton
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={() => addFoodToCart(food)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};
export default ProductCard;

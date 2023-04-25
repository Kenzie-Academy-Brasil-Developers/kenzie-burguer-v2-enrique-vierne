import { MdDelete } from "react-icons/md";
import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { CartContext, IFood } from "../../../Providers/cartContext";
import { useContext } from "react";

interface ICartProductProps {
  item: IFood;
}

const CartProductCard = ({ item }: ICartProductProps) => {
  const { removeFoodFromCart } = useContext(CartContext);

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={item.img} alt={item.category} />
      </div>
      <div className="contentBox">
        <StyledTitle tag="h3" $fontSize="three">
          {item.name}
        </StyledTitle>
        <button
          type="button"
          aria-label="Remover"
          onClick={() => removeFoodFromCart(item.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;

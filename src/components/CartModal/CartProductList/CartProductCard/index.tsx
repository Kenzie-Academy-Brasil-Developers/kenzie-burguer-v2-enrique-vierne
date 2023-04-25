import { MdDelete } from "react-icons/md";

import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { IFood } from "../../../Providers/cartContext";

interface ICartProductProps {
  item: IFood;
}

const CartProductCard = ({ item }: ICartProductProps) => (
  <StyledCartProductCard>
    <div className="imageBox">
      <img src={item.img} alt={item.category} />
    </div>
    <div className="contentBox">
      <StyledTitle tag="h3" $fontSize="three">
        {item.name}
      </StyledTitle>
      <button type="button" aria-label="Remover">
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>
);

export default CartProductCard;

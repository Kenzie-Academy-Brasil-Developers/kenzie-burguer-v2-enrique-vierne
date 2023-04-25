import CartProductCard from "./CartProductCard";

import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../Providers/cartContext";

const CartProductList = () => {
  const { cart } = useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => {
            return <CartProductCard key={item.id} item={item} />;
          })
        ) : (
          <StyledParagraph>Nenhum item adicionado.</StyledParagraph>
        )}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">R$ 14,00</StyledParagraph>
      </div>
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;

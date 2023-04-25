import CartProductCard from "./CartProductCard";

import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../Providers/cartContext";

const CartProductList = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalCart = cart.reduce((previousValue, product) => {
    return previousValue + product.price;
  }, 0);
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
        <StyledParagraph className="total">
          R${totalCart.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={() => clearCart()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;

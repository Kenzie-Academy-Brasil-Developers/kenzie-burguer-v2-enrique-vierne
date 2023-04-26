import { StyledShopPage } from "./style";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { StyledContainer } from "../../styles/grid";
import { useContext, useState } from "react";
import { CartContext } from "../../components/Providers/cartContext";

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <StyledShopPage>
      {isOpen ? <CartModal setIsOpen={setIsOpen} cart={cart} /> : null}
      <Header setIsOpen={setIsOpen} />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;

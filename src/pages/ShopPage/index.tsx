import { StyledShopPage } from "./style";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { StyledContainer } from "../../styles/grid";
import { useState } from "react";

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledShopPage>
      {isOpen ? <CartModal setIsOpen={setIsOpen} /> : null}
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

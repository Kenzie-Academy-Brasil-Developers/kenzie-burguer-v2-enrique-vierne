import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { useContext } from "react";
import { CartContext } from "../../Providers/cartContext";

const SearchForm = () => {
  const { searchInput, setSearchInput, setSearch } = useContext(CartContext);
  const submit = (e: any) => {
    e.preventDefault();
    setSearch(searchInput);
  };
  return (
    <StyledSearchForm onSubmit={submit}>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;

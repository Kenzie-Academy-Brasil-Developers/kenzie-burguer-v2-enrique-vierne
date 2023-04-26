import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";

const SearchForm = () => {
  const submit = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <StyledSearchForm onSubmit={(e) => submit(e)}>
      <input type="text" placeholder="Digitar pesquisa" />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;

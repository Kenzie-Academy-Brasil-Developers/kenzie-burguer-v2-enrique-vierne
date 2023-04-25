import { FieldError } from "react-hook-form";
import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  type: string;
}

const Input = forwardRef(
  (
    { label, error, type, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div>
      <StyledInputContainer>
        <input type={type} ref={ref} {...rest} />
        {label ? <label>{label}</label> : null}
      </StyledInputContainer>
      {error ? (
        <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
      ) : null}
    </div>
  )
);

export default Input;

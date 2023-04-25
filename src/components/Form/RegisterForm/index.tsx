import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../Providers/userContext";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        label="Seu nome"
        {...register("name")}
        disabled={loading}
        error={errors.name}
      />
      <Input
        type="email"
        label="Seu e-mail"
        {...register("email")}
        disabled={loading}
        error={errors.email}
      />
      <Input
        type="password"
        label="Crie uma senha"
        {...register("password")}
        disabled={loading}
        error={errors.password}
      />
      <Input
        type="password"
        label="Confirme uma senha"
        {...register("confirm")}
        disabled={loading}
        error={errors.confirm}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;

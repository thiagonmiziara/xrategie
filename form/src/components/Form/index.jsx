import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Img from "../Img";
import { useForm, Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  StyledBorder,
  StyledButton,
  StyledConteiner,
  StyledInputLabel,
  StyledSection,
} from "./styled";

const Form = () => {
  const { handleSubmit, control } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((password) => !password);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledConteiner>
        <StyledBorder>
          <Img />
        </StyledBorder>

        <StyledSection>
          <FormControl>
            <StyledInputLabel htmlFor="standard-adornment-password">
              Email
            </StyledInputLabel>
            <Controller
              as={Input}
              name="Email"
              control={control}
              defaultValue=""
              className="materialUIInput"
              required={true}
            />
          </FormControl>

          <FormControl>
            <StyledInputLabel htmlFor="standard-adornment-password">
              Senha
            </StyledInputLabel>

            <Controller
              name="password"
              defaultValue=""
              control={control}
              render={(props) => (
                <Input
                  {...props}
                  required={true}
                  id="filled-basic"
                  type={showPassword ? "text" : "password"}
                  value={props.value}
                  onChange={(e) => props.onChange(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
          </FormControl>

          <FormControl>
            <StyledButton type="submit" variant="contained">
              ENTRAR
            </StyledButton>
          </FormControl>
        </StyledSection>
      </StyledConteiner>
    </form>
  );
};

export default Form;

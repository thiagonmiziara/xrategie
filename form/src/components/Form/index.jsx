import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./Form.module.css";
import {StyledButton, StyledInputLabel} from "./styled"
import {
  
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  IconButton,
  
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Img from "../Img";



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
      <div className={styles.container}>
        <div className={styles.border}>
          <Img />
        </div>

        <div className={styles.form}>
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
                  id="standard-basic"
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
        </div>
      </div>
    </form>
  );
};

export default Form;

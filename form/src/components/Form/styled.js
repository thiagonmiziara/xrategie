import styled from "styled-components";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

export const StyledButton = styled(Button)
`
  && {
    background-color: #fff;
    border: 1px solid #6cb3b7;
    margin-top: 1rem;
    font-size: 1rem;
    color: #6cb3b7;

    &:hover {
      background-color: #6cb3b7;
      color: #fff;
    }
  }
`;

export const StyledInputLabel = styled(InputLabel)
`
  && {
    color: #6cb3b7;
  }
`;

export const StyledConteiner = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
  box-sizing: border-box;
  background: white;
  border: 1px solid #ccc;
  width: 80%;
  height: 30rem;
  margin: 4.5rem auto;
  padding: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 80%;
    padding: 1rem;
    margin: 2rem auto;
  }
`;

export const StyledBorder = styled.div `
  border-right: 2px solid #6cb3b7;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    border: none;
    width: 100%;
    margin-left: 2.5rem;
  }
`;

export const StyledSection = styled.section `
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
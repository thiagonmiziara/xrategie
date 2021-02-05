import styled from "styled-components";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel"


export const StyledButton = styled(Button)
`
    background-color: #fff;
    border: 1px solid #6cb3b7;
    margin-top: 1rem;
    font-size: 1rem;
    color: #6cb3b7;


&:hover {
    background-color: #6cb3b7;
    color: #fff;
}

`

export const StyledInputLabel = styled(InputLabel)
`
color:  #6cb3b7;
`
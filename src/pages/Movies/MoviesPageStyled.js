import styled from "styled-components";

export const StyledForm = styled.form`
display: flex; 
justify-content: center;
gap: 5px;
//text-align: center;
color: #4b6584;
margin-top: 15px;
`
export const StyledButton = styled.button`
width: 70px;
border-radius: 2px;
border: none;
background-color: #4b6584;
color: #d1d8e0;
&:hover {
    background-color: #d1d8e0; 
color:   #4b6584;
}
`
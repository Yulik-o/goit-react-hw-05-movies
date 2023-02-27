
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyledLink = styled(NavLink)`
color: #fed330;
padding: 5px;
border-bottom: 2px solid transparent;
transition: all .3s;
list-style: none;

&.active {
    color: #d1d8e0;
    border-bottom: 2px solid #d1d8e0;
}`



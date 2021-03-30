import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`    
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    color: pointer;
    &:focus {
        outline: none;
}
align-self: ${props => props.align || 'strech'}
`


const Button = (props) => {
    return <StyledButton {...props}/>
};

export default Button;
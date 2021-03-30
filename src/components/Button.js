import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`    
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    color: pointer;
    &:focus {
        outline: none;
}
align-self: ${props => props.align || 'stretch'};

${props => props.primary && css`
    color: ${props => props.color || `white`};
    background: ${props => props.background || 'white'};
`}
`


const Button = (props) => {
    return <StyledButton {...props}/>
};

export default Button;
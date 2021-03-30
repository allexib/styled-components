import React from 'react';
import styled from 'styled-components';

const StyleTitle = styled.h1`
    color: ${props => props.color || props.theme.colors.primary};
`

const Title = (props) => {
    return <StyleTitle {...props}/>
};

export default Title;

import React from 'react';
import styled from 'styled-components';

const SryleTitle = styled.h1`
    color: ${props => props.color};
`

const Title = (props) => {
    return <SryleTitle {...props}/>
};

export default Title;

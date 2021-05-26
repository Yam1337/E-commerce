import React from 'react';

import {
  ButtonWrapper,
  RedButton,
  Loader
} from './styles';

const StdButton = ({ loading = false, text, background, color, radius = false }) => {
  return (
    <ButtonWrapper
      background={background}
      radius={radius}
      color={color}>
    {loading === true ? <Loader /> : null}
    <span>{text}</span>
    </ButtonWrapper>
  );
}

export default StdButton;

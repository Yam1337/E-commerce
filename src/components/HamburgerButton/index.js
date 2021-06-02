import { useState, useEffect } from 'react';
import Button from './styles';

const HamburgerButton = ({ isMenuOpen, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      type='button'
      isMenuOpen={isMenuOpen}
      aria-expanded={isMenuOpen}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      <span className='line line--1' />
      <span className='line line--2' />
      <span className='line line--3' />
      <span className='sr-only'>{isMenuOpen ? 'Close' : 'Open'} menu</span>
    </Button>
  );
};

export default HamburgerButton;

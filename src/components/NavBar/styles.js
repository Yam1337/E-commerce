import styled from 'styled-components';

// 14x16rem looks good with photo
export const NavWrapper = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.color || 'green'};
`;

export const NavLogo = styled.img`
  src: ${(props) => props.src || ''}
`;

export const NavLink = styled.div`
  position: absolute;
  background-color: ${(props) => props.color || 'green'};
  padding: 1rem;
`;
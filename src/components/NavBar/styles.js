import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: ${({ theme }) => theme.navbar.primaryColor};
  background-color: ${({ theme }) => theme.navbar.background};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
`;

export default NavBarWrapper;

import styled from 'styled-components';

const StandardButtonWrapper = styled.button`
  width: ${(props) => props.width || '252px'};
  height: 62px;
  background-color: ${({ theme }) => theme.body.primaryColor};
  color: ${({ theme }) => theme.body.background};
  background-image: ${(props) => props.icon || ''};
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
  font-weight: bold;
  border: none;
  &:active {
    transform: scale(0.95);
  }
`;

export default StandardButtonWrapper;

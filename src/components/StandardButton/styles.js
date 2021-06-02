import styled from 'styled-components';

const StandardButtonWrapper = styled.button`
  width: 252px;
  height: 62px;
  background-color: ${(props) => props.backgroundColor || '#181818'};
  color: ${(props) => props.color || '#F5F5F5'};
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

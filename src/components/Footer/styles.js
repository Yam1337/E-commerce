import styled from 'styled-components';

// 14x16rem looks good with photo
export const FooterWrapper = styled.div`
  position: absolute;
  min-width: 100%;
  background-color: ${(props) => props.color || '#505050'};
`;

export const FooterLogo = styled.img`
  src: ${(props) => props.src || ''}
`;

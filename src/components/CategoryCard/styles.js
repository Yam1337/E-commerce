import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 100%;
  background-image: url(${(props) => props.img || ''});
  background-size: 100% 100%;
  transition: 150ms;

  &:hover {
    transform: scale(1.08);
  }
`;

export const Name = styled.span`
  margin-left: 0.2rem;
  color: ${({ theme }) => theme.body.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${(props) => props.size || '1rem'};
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  backdrop-filter: blur(2px);
`;

export const PhotoContainer = styled.div`
  height: calc(100% - 2rem);
  background-image: url(${(props) => props.img || ''});
  background-size: 100% 100%;
`;

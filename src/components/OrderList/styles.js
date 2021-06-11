import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 2rem;
  color: ${({ theme }) => theme.body.errorColor};
`;

export const Li = styled.li`
  list-style-type: none;
`;

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.body.primaryColor};
  font-weight: bold;
`;

export const Span = styled.span`
  font-size: 2rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.body.primaryColor};
`;

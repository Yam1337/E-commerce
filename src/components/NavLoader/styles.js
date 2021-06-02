import styled, { keyframes } from 'styled-components';

// idea and code taken from https://loading.io/ - great
// resource for pure CSS loaders
const anime1 = keyframes`
  from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
`;

const anime3 = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;

const anime2 = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(24px, 0);
  }
`;

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #989898;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${anime1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${anime2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${anime2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${anime3} 0.6s infinite;
  }
`;

export default Loader;

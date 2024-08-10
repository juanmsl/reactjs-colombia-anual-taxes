import styled from 'styled-components';

export const MainLayoutStyle = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2em;

  height: 100dvh;
  overflow: auto;
  background-size: 40px 40px;
  background-position:
    0 0,
    20px 20px;
  animation: AnimateBG 3s linear infinite;
  background-image: radial-gradient(${props => props.theme.colors.text}55 1px, transparent 1px),
    radial-gradient(${props => props.theme.colors.text}55 1px, transparent 1px);

  @keyframes AnimateBG {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 80px 40px;
    }
  }
`;

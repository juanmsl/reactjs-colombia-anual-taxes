import styled from 'styled-components';

export const MainLayoutStyle = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1em;
  gap: 2em;

  height: 100dvh;
  overflow: auto;
  background-size: 40px 40px;
  background-position:
    0 0,
    20px 20px;
  background-image: radial-gradient(${props => props.theme.colors.text}55 1px, transparent 1px),
    radial-gradient(${props => props.theme.colors.text}55 1px, transparent 1px);

  .main-layout-content {
    min-width: 1200px;
    max-width: ${props => props.theme.constants.breakpoints.laptopM};
    height: 100%;
    overflow: auto;
  }
`;

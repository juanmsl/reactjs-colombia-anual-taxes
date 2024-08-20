import styled from 'styled-components';

export const MainLayoutStyle = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100dvh;
  overflow: auto;

  .main-layout-content {
    height: 100%;
    overflow: auto;
    padding: 0 2em;

    &-page {
      max-width: ${props => props.theme.constants.breakpoints.laptopL};
      margin: 0 auto;
    }
  }
`;

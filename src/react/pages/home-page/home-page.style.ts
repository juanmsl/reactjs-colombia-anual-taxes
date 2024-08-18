import styled from 'styled-components';

export const HomePageStyle = styled.section`
  display: grid;
  gap: 2em;
  align-content: start;

  p {
    max-width: 70ch;
  }

  .section-box {
    background: ${props => props.theme.colors.background};
    border: 4px solid ${props => props.theme.colors.primary};
    padding: 1em;
    border-radius: 10px;
  }

  .home-header {
  }

  .home-data-section {
    &-content {
      display: grid;
      gap: 1em;
      align-content: start;
      grid-template-columns: repeat(auto-fit, 350px);
      grid-template-rows: auto 1fr auto;
    }

    &-item {
      display: grid;
      grid-auto-flow: row;
      place-content: center;
      place-items: center;
      text-align: center;
      text-wrap: balance;
    }
  }

  .declaration-requirements {
    display: grid;
    gap: 1em;
    align-content: start;

    &-content {
      display: grid;
      gap: 1em;
      align-content: start;
      grid-template-columns: repeat(auto-fit, 350px);
      grid-template-rows: auto 1fr auto;
    }
  }

  .declaration-requirement {
    display: grid;
    gap: 4px;
    grid-template-rows: subgrid;
    grid-row: span 3;

    .requirement-title {
      border-bottom: 1px solid;
      margin-bottom: 1em;
    }

    .requirement-text {
    }

    .requirement-value {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

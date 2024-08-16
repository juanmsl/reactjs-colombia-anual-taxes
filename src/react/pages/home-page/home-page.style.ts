import styled from 'styled-components';

export const HomePageStyle = styled.section`
  display: grid;
  gap: 2em;
  align-content: start;
  grid-template-areas: 'header header' 'requirements data';
  grid-template-columns: 1fr 350px;

  p {
    max-width: 70ch;
  }

  .home-data-grid {
    display: grid;
    gap: 1em;
    align-content: start;
  }

  .home-data {
    display: grid;
    grid-auto-flow: row;
    place-content: center;
    place-items: center;
    border: 1px solid;
    border-radius: 25px;
    padding: 2em;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondaryContrast};
    text-align: center;

    &:nth-child(even) {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
    }

    &-content {
      text-align: center;
      text-wrap: balance;
      max-width: 150px;
    }
  }

  .section-box {
    background: ${props => props.theme.colors.background};
    border: 4px solid ${props => props.theme.colors.primary};
    padding: 1em;
    border-radius: 10px;
  }

  .home-header {
    grid-area: header;
  }

  .home-data-section {
    grid-area: data;
    text-align: center;
    align-self: start;
  }

  .declaration-requirements {
    display: grid;
    gap: 1em;
    align-content: start;
    max-width: ${props => props.theme.constants.breakpoints.laptopS};
    grid-area: requirements;
    align-self: start;
  }

  .declaration-requirement {
    display: grid;
    grid-template-columns: minmax(auto, 300px) 1fr auto;
    justify-content: space-between;
    align-items: end;

    .requirement-left {
      display: grid;
      justify-content: start;
      justify-items: start;
    }

    .requirement-title {
      color: ${props => props.theme.colors.primary};
    }

    .requirement-text {
    }

    .requirement-value {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

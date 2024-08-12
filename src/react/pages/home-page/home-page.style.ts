import styled from 'styled-components';

export const HomePageStyle = styled.section`
  display: grid;
  gap: 1em;
  align-content: start;

  p {
    max-width: 70ch;
  }

  .home-data-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    place-content: start;
  }

  .home-data {
    display: grid;
    grid-auto-flow: row;
    place-content: center;
    place-items: center;
    aspect-ratio: 1 / 1;
    border: 1px solid;
    border-radius: 50%;
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
`;

import styled from 'styled-components';

import { SectionLayout } from '@layouts/section-layout';

export const HomePageStyle = styled.section`
  display: grid;
  align-content: start;

  .home-page-logo {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    padding: 2em;
    background: ${props => props.theme.colors.primary};

    img {
      width: 100%;
    }
  }

  .home-header {
    display: grid;
    gap: 2em;
    align-content: center;
    justify-items: center;
    min-height: ${props => props.theme.constants.sectionMinHeight};

    &-title {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: auto auto;
      align-items: center;
      gap: 2em;
      max-width: 930px;
    }

    &-description {
      max-width: 70ch;
    }
  }
`;

export const DeclarationYearDataStyle = styled(SectionLayout)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};

  .year-data-section-content {
    min-height: ${props => props.theme.constants.sectionMinHeight};
    display: grid;
    gap: 2em;
    place-content: center;
    text-align: center;
  }

  .year-data-content {
    display: grid;
    gap: 1em;
    align-content: start;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 350px);
    grid-template-rows: auto 1fr auto;
  }

  .year-data-item {
    display: grid;
    grid-auto-flow: row;
    place-content: center;
    place-items: center;
    text-align: center;
    text-wrap: balance;
    transition: all 300ms ease;
    background: ${props => props.theme.colors.primary};
    border: 1px solid;
    padding: 1em;
    border-radius: 10px;

    &--value {
    }

    &:hover {
      background: ${props => props.theme.colors.primary}11;
    }
  }
`;

export const DeclarationRequirementsStyle = styled.section`
  display: grid;
  gap: 1em;
  place-content: center;
  min-height: ${props => props.theme.constants.sectionMinHeight};

  .declaration-content {
    display: grid;
    gap: 1em;
    align-content: start;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-rows: auto 1fr auto;
  }

  .declaration-requirement {
    display: grid;
    gap: 4px;
    grid-template-rows: subgrid;
    grid-row: span 3;
    border: 1px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};
    padding: 1em;
    border-radius: 10px;
    transition: all 300ms ease;

    .requirement-title {
      border-bottom: 1px solid;
      margin-bottom: 1em;
    }

    .requirement-text {
    }

    .requirement-value {
      color: ${props => props.theme.colors.primary};
    }

    &:hover {
      background: ${props => props.theme.colors.primary}22;
    }
  }
`;

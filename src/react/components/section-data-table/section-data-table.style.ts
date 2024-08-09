import styled from 'styled-components';

export const SectionDataTableStyle = styled.section`
  display: grid;
  gap: 0.5em;
  background: ${props => props.theme.colors.background};

  border: 1px solid;
  border-radius: 25px;

  .data-table-title {
    text-wrap: balance;
    text-align: center;
    padding-top: 1em;
  }

  .item-rows {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    //border-radius: 25px;
    //border: 1px solid;
    overflow: hidden;
  }

  .item-row {
    display: grid;
    grid-template-columns: subgrid;
    gap: 1em;
    align-items: center;
    grid-column: span 3;
    padding: 0.5em 1em;
    transition: background 250ms ease;

    &:first-child,
    &:last-child {
      padding-top: 1em;
      padding-bottom: 1em;
    }

    &:not(:last-child) {
      border-bottom: 1px dashed ${props => props.theme.colors.gray7};
    }

    &:not(:first-child):not(:last-child):hover {
      background: hsl(from ${props => props.theme.colors.secondary} h s 90 / 40%);
    }
  }

  .item-row-content {
    grid-column: span 2;
    display: grid;
    grid-template-columns: subgrid;
  }

  .add-row-button {
  }

  .id-field {
    justify-self: start;
    max-width: 200px;
  }

  .delete-row-button,
  .empty-table-button {
    transition: all 300ms ease;
    cursor: pointer;
    width: 1.6em;
    height: 1.6em;
    border: 1px solid;
    padding: 0.3em;
    border-radius: 50%;
    font-size: 1em;

    &:hover {
      color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primary}33;
    }
  }
`;

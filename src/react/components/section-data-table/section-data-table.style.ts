import styled from 'styled-components';

export const SectionDataTableStyle = styled.section`
  display: grid;
  gap: 0.5em;
  background: ${props => props.theme.colors.background.main};

  .data-table-title {
    text-wrap: balance;
    padding-top: 1em;
  }

  .item-delete-row {
    display: grid;
    place-content: center;
    width: 26px;
    height: 26px;
    opacity: 0;
  }

  .item-rows {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    overflow: hidden;
  }

  .table-rows {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: span 3;
    overflow: hidden;
    border: 1px solid;
    border-radius: 10px;
  }

  .actions-row {
    display: grid;
    grid-template-columns: subgrid;
    gap: 1em;
    align-items: center;
    grid-column: span 3;
    padding: 0 0 1em;
    transition: background 250ms ease;
  }

  .item-row {
    display: grid;
    grid-template-columns: subgrid;
    gap: 1em;
    align-items: center;
    grid-column: span 3;
    padding: 0.5em 1em;
    transition: background 250ms ease;

    &:first-child {
      padding-top: 1em;
      padding-bottom: 1em;
    }

    &:not(:last-child) {
      border-bottom: 1px dashed ${props => props.theme.colors.gray7};
    }

    &:not(:first-child):hover {
      background: hsl(from ${props => props.theme.colors.secondary.main} h s 90 / 40%);

      &:hover {
        .item-delete-row {
          opacity: 1;
        }
      }
    }
  }

  .empty-table-message {
    grid-column: span 3;
  }

  .add-row-button {
  }

  .clear-table-button {
    display: flex;
    justify-content: end;
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
  }
`;

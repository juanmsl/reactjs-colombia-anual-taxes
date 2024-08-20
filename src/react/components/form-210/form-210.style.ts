import styled from 'styled-components';

export const Form210Style = styled.section`
  display: grid;
  gap: 1em;
  align-content: start;
  justify-self: start;
  margin: 0 auto;

  .table-label {
    text-wrap: balance;

    &.at-bottom {
      vertical-align: bottom;
    }
  }

  .form-section-title {
    text-align: center;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    padding: 0.5em;
    border-radius: 100px;
  }
`;

export const FormTable = styled.table`
  border-spacing: 10px;

  .column-title {
    text-align: center;
    border: 2px solid;
    padding: 0.5em;
    border-radius: 100px;
    background: hsl(from ${props => props.theme.colors.primary} h s 90);
    color: ${props => props.theme.colors.primary};

    span {
      font-size: 1em;
    }
  }

  & > tbody > tr > td,
  & > tbody > tr > th {
    border: 0;
    padding: 0;
    width: 220px;
    min-width: 220px;
  }

  .empty {
    border-radius: 100px;
  }

  .empty-row {
    height: 40px;
  }

  .text-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    text-align: center;
    width: auto;
    min-width: unset;
  }
`;

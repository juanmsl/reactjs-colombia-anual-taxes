import styled from 'styled-components';

export const MarginTableStyle = styled.section`
  display: grid;
  padding: 1em 1.5em;
  gap: 0.5em;
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background};
  border-radius: 15px;
  margin-top: 1em;

  .columns {
    display: grid;
    grid-auto-flow: column;
    gap: 1em;
    justify-content: start;
    align-items: start;
  }

  .margin-table {
    width: fit-content;

    &,
    td {
      border: 1px solid ${props => props.theme.colors.text};
      border-collapse: collapse;
    }

    tr.selected-row {
      color: ${props => props.theme.colors.primary};
      background: hsl(from ${props => props.theme.colors.primary} h s 90);
    }

    td {
      padding: 0.5em;
      //width: 200px;
    }
  }

  ol {
    margin: 0;
  }

  li {
    margin: 1em 0;
  }

  code {
    border: 1px solid;
    padding: 10px;
    border-radius: 4px;
    display: block;
    font-size: ${props => props.theme.constants.typography.label.fontSize};
  }
`;

import styled from 'styled-components';

export const Table133Style = styled.section`
  display: grid;
  white-space: initial;
  gap: 1em;

  padding: 1em 1.5em;
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background};
  border-radius: 15px;
  margin-top: 1em;

  code {
    padding: 0.5em;
    border: 1px solid;
    display: block;
    margin-bottom: 1em;
    background: ${props => props.theme.colors.background};
    border-radius: 10px;
  }

  .tables-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  table,
  td {
    border: 1px solid;
    border-collapse: collapse;
  }

  td {
    padding: 0.5em;
  }
`;

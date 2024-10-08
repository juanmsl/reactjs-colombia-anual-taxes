import styled from 'styled-components';

export const FieldInputDetailsStyle = styled.section`
  display: grid;
  gap: 1em;
  max-width: 600px;
  width: 100%;

  .details-header {
    display: grid;
    justify-content: space-between;
    gap: 3em;
    align-items: center;
    grid-auto-flow: column;
  }

  .line-separator {
    margin-bottom: 2em;
  }
`;

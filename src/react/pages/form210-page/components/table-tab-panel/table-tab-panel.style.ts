import styled from 'styled-components';

export const TableTabPanelStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  .recommended-width {
    max-width: 75ch;
  }

  .panel-tables {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    align-items: start;
  }
`;

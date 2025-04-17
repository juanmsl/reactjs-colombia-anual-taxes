import styled from 'styled-components';

export const FormFieldStyle = styled.section`
  display: grid;
  gap: 2px;
  position: relative;
  align-content: start;
  grid-template-rows: subgrid;
  grid-row: span 2;

  .data-label {
    align-self: end;
    text-wrap: balance;
  }

  .data-with-overlay {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: 100px;
    }
  }
`;

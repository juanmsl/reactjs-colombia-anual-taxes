import styled from 'styled-components';

export const FormFieldStyle = styled.td`
  position: relative;

  &.field-with-overlay {
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

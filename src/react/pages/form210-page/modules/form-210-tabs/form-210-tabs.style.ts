import { SectionLayout } from '@juanmsl/ui';
import styled from 'styled-components';

export const Form210TabsStyle = styled(SectionLayout)`
  .form-210-content {
    display: grid;
    gap: 2em;
    grid-template-columns: 1fr auto;
    width: 100%;
    align-self: start;
    align-content: start;
    align-items: start;
    position: relative;
  }

  .tabs-list-container {
    position: sticky;
    top: 0;
    gap: 0.5em;

    span {
      white-space: nowrap;
      text-align: left;
    }
  }

  .fields-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    align-items: start;
    justify-content: start;
    margin-right: auto;
    grid-template-rows: auto auto;
  }
`;

export const Form210TabStyle = styled.span`
  display: grid;
  place-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Form210TabsDataStyle = styled.section`
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

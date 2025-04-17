import { SectionLayout } from 'polpo/ui';
import styled from 'styled-components';

export const Form210TabsStyle = styled(SectionLayout)`
  height: 100%;
  overflow: auto;

  .form-210-content {
    display: grid;
    gap: 4em;
    grid-template-columns: auto 1fr;
    width: 100%;
    align-self: start;
    align-content: start;
    align-items: start;
    position: relative;
    padding: 2em 0;
  }

  .tabs-list-container {
    gap: 0.5em;
    position: sticky;
    top: 0;
    left: 0;

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

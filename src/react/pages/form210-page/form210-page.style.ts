import { SectionLayout } from 'polpo/ui';
import styled from 'styled-components';

export const Form210PageStyle = styled.main`
  position: relative;
  height: 100%;
  overflow: auto;
  display: grid;

  .form-210-content {
    height: 100%;
    overflow: auto;
    display: grid;
    grid-template-rows: 1fr auto;
  }
`;

export const Form210PagePanelStyle = styled(SectionLayout)`
  height: 100%;
  overflow: auto;

  .form-210-content-panel {
    display: grid;
    padding-left: 78px;
    height: 100%;
    overflow: auto;
  }
`;

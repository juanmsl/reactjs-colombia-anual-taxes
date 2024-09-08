import styled from 'styled-components';

export const FieldInputContainer = styled.section`
  display: grid;
  gap: 4px;

  .formula {
    text-align: center;
  }
`;

export const FieldInputStyle = styled.section`
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 10px;
  border: 1px solid;
  align-items: center;
  border-radius: 50px;
  padding: 4px 10px 4px 4px;
  background: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.main};

  .form-field-id {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.white};
    padding: 4px;
    display: grid;
    place-content: center;

    border-radius: 40px;
    width: 36px;
    height: 36px;
  }

  .form-field-value {
    border-radius: 0 40px 40px 0;
    display: grid;
    align-items: center;
    height: 100%;
  }

  &.is-locked {
  }

  &.is-disabled {
    background: ${props => props.theme.colors.gray9};
    color: ${props => props.theme.colors.gray6};

    .form-field-id {
      background: ${props => props.theme.colors.gray7};
      color: ${props => props.theme.colors.gray6};
    }
  }

  &.read-only {
    background: hsl(from ${props => props.theme.colors.primary.main} h s 90);
    color: ${props => props.theme.colors.primary.main};

    input {
      font-weight: bold;
    }
  }
`;

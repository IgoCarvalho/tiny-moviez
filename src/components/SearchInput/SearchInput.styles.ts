import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: ${theme.colors.backgroundLight};
    color: ${theme.colors.text};
    padding: 0px 25px;
    border: 1px solid ${theme.colors.border};
    border-radius: 12px;

    input {
      background: transparent;
      border: none;
      outline: none;
      height: 56px;
      font-size: 18px;
      font-weight: 500;

      &::placeholder {
        color: ${theme.colors.secondaryTitle};
      }
    }

    &:focus-within {
      border-color: ${theme.colors.primary};
    }
  `}
`;

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_400}` : 'none'};

  border-radius: 10px;

  padding: 0 8px 0 0;

  > input {
    height: 40px;
    max-width: 80px;
    padding: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    font-family: 'Roboto', sans-serif;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    :focus {
      outline: none;
    }
  }
  > button {
    border: none;
    background: none;

    svg {
      font-size: 18px;

      color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.GRAY_200 : theme.COLORS.RED};
    }
  }
`

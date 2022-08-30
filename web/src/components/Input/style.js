import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;
  border: 1px solid #ffffff;
  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
  svg {
    margin-left: 12px;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    width: 100%;
    height: 48px;

    padding: 12px 14px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;

    border: 1px solid #ffffff;
    border-radius: 5px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > svg {
      margin-left: 14px;
    }
  }
`

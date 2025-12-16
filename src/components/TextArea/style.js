import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 170px;
  padding: 12px;

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 10px;
  border: 1px solid #ffffff;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`

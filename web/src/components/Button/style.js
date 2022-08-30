import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.RED};
  border-radius: 5px;
  padding: 12px 32px;
  border: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    margin-right: 11px;
  }
`

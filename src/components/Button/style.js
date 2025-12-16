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
  font: 500 14px/24px 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    margin-right: 11px;
  }
`

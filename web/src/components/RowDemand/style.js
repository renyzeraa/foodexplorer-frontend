import styled from 'styled-components'

export const Row = styled.tr`
  .status {
    display: flex;
    align-items: center;
    gap: 8px;
    .select-status {
      justify-content: center;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      padding: 16px;
      border-radius: 4px;
    }
  }
`

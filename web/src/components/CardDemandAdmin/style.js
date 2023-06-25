import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px 20px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_INGREDIENT};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  line-height: 160%;
  max-width: 450px;
  display: grid;
  gap: 16px 0;
  .infos-demand {
    display: flex;
    gap: 30px;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 450px;
    justify-content: flex-start;
    align-items: center;
  }
  .status-demand {
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    border: none;
    border-radius: 5px;
    background: var(--dark-dark-900, #0d1d25);
  }
`

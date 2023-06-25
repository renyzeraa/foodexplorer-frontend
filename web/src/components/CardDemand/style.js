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
  .infos-demand {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 16px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`

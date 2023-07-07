import styled from 'styled-components'

export const Container = styled.div`
  .container {
    width: 330px;
    height: 55px;
    display: flex;
    padding: 12px 0 12px 6px;
    align-items: center;

    section {
      display: grid;
      justify-items: start;

      button {
        padding: 8px 8px 8px 0;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.RED};
        font-weight: 400;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
      }
    }

    img {
      border-radius: 50%;
      width: 72px;
      height: 72px;
      margin-right: 13px;
    }

    .content {
      p {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
      }

      .price {
        margin-left: 10px;
        font-family: 'Roboto', sans-serif;

        font-weight: 400;
        font-size: 14px;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .content {
    height: 70vh;
    padding: 0 24px;
    margin-top: 48px;
    margin-bottom: 64px;

    .content-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;

      .title-page {
        font-size: 32px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        line-height: 140%;
      }

      a {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }
    .content-favorites {
      display: grid;
      .alert-no-plates {
        text-align: center;
        width: 100%;
        margin-top: 120px;
        position: relative;
        h1 {
          color: ${({ theme }) => theme.COLORS.GRAY_100};
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
        }
        .icon-not {
          position: fixed;
          color: ${({ theme }) => theme.COLORS.RED};
          opacity: 0.4;
          z-index: -1;
          margin-top: -10px;
          margin-left: -40px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .content {
      max-width: 1120px;
      margin: 34px auto 64px;

      .content-favorites {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 50px 12px;
        .alert-no-plates {
          h1 {
            font-size: 32px;
          }
        }
      }
    }
  }
`

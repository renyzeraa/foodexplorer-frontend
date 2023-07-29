import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  > main {
    margin: 48px auto;
    padding: 0 56px;
    > a {
      font-weight: 500;
      font-size: 24px;
      font-family: 'Poppins', sans-serif;
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .content-img {
      margin: 24px auto;
      display: flex;
      justify-content: center;
      img {
        width: 80%;
        border-radius: 50%;
      }
    }

    .content-about {
      display: grid;
      font-family: 'Poppins', sans-serif;
      text-align: center;
      h1 {
        font-weight: 500;
        font-size: 27px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-bottom: 24px;
      }

      p {
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-bottom: 24px;
      }

      .makings {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 24px 8px;
        padding: 0px 20px;
        flex-wrap: wrap;
        li {
          background: ${({ theme }) => theme.COLORS.BACKGROUND_INGREDIENT};
          border-radius: 5px;
          padding: 4px 8px;
        }
      }

      button:last-child {
        margin-top: 48px;
        max-width: 160px;
      }

      .content-includes {
        display: flex;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        margin-top: 48px;
        .btn {
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 20px;
          margin: 10px;
        }
        button:last-child {
          margin-top: 0px;
          max-width: 160px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    > main {
      height: 100vh;
      max-width: 1120px;
      width: 100vw;
      padding: 0 24px;
      display: flex;
      margin: 0 auto;
      gap: 40px;
      align-items: center;
      margin: 100px auto 60px;
      
      a {
        position: absolute;
        top: 120px;
        padding: 0 12px;
      }
      .content-img {
        margin: 0;
        img {
          margin: 0;
          width: 390px;
          height: 390px;
        }
      }
      .content-about {
        text-align: left;

        h1 {
          font-size: 40px;
        }
        p {
          font-size: 24px;
        }
        .makings {
          padding: 0;
        }

        .content-includes {
          justify-content: left;
          button:last-child {
            margin-left: 33px;
          }
        }
      }
    }
  }
`

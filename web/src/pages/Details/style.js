import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  > main {
    margin: 48px 0;
    padding: 0 24px;
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
      margin: 40px 0;
      img {
        width: 100%;
      }
    }

    .content-about {
      display: grid;
      font-family: 'Poppins', sans-serif;
      text-align: center;
      h1 {
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      p {
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }

      .makings {
        margin-top: 32px;
        display: flex;
        height: 200px;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 20px;
        ul {
          list-style: none;
          display: flex;
          gap: 25px;
        }
        ul li img {
          width: 100px;
          height: 100px;
        }
        ul li p {
          text-align: center;
          font-weight: 400;
          font-size: 18px;
        }
        ::-webkit-scrollbar {
          background-color: transparent;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.COLORS.PRICE};
          border-radius: 20px;
        }
        ::-webkit-scrollbar-button:start:decrement {
          width: 50px;
          background-color: transparent;
        }
        ::-webkit-scrollbar-button:end:increment {
          width: 50px;
          background-color: transparent;
        }
      }

      .content-includes {
        display: flex;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        align-items: center;
        justify-content: center;
        margin: 48px 0;
        .price-title {
          color: ${({ theme }) => theme.COLORS.PRICE};
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 32px;
        }
        .btn {
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 20px;
          margin: 10px;
        }
        button {
          max-width: 92px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    > main {
      height: 100vh;
      max-width: 1120px;
      padding: 0 24px;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      a {
        position: absolute;
        top: 120px;
        padding: 0 12px;
      }
      .content-img {
        img {
          margin: 0;
          width: 390px;
          height: 390px;
        }
      }
      .content-about {
        max-width: 600px;
        text-align: left;

        .makings {
          margin: 24px 0;
          overflow: hidden;
          padding: 0;
          height: auto;
        }

        .content-includes {
          margin: 0;
          justify-content: left;
        }
      }
    }
  }
`

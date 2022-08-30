import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  > main {
    margin-top: 72px;
    header {
      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      height: 244px;
      margin: 0 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .img-content {
        img {
          width: 323px;
          position: absolute;
          top: 210px;
          z-index: 0;
        }
      }

      .text-content {
        text-align: center;
        padding: 20px;
        z-index: 0;
        width: 300px;

        h1 {
          font-weight: 500;
          font-size: 40px;
        }
      }
    }

    .content {
      margin: 62px auto 0;
      max-width: 1100px;
      padding: 0 24px;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 32px;
        margin-bottom: 40px;
      }

      .cards {
        display: flex;
        gap: 30px;
        overflow-x: scroll;
        overflow-y: hidden;
        max-width: 1100px;
        box-shadow: 0 0 3em 0px #316661;
        border-radius: 10px;
        padding: 12px;

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
    }

    .content:last-child {
      margin-bottom: 120px;
    }
  }

  @media (min-width: 550px) {
    main {
      header {
        max-width: 1050px;
        align-items: center;
        margin: 0 24px;

        .img-content {
          img {
            width: 460px;
            position: absolute;
            top: 127px;
            z-index: 0;
          }
        }
        .text-content {
          text-align: left;
          width: auto;
        }
      }
    }
  }

  @media (min-width: 800px) {
    main {
      margin-top: 124px;
      header {
        margin: 0 24px;
        .img-content {
          img {
            width: 556px;
            top: 120px;
          }
        }
        .text-content {
          text-align: left;
          width: auto;
          p {
            font-weight: 400;
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
          }
        }
      }
    }
  }

  @media (min-width: 1100px) {
    main {
      header {
        margin: 0 auto;
      }
    }
  }
`

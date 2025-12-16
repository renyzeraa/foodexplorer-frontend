import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  .main-content {
    display: grid;
    padding: 0 24px;
    justify-items: center;
    padding: 0 0 64px 0;
    .container {
      margin: 34px 0;
      text-align: center;
      width: 100%;
      padding: 0 24px;
      h1 {
        max-width: 550px;
        font-weight: 500;
        font-size: 32px;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin: 0 auto 32px;
      }
      h2 {
        margin-top: 24px;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      }
      .demand {
        display: grid;
        height: auto;
        max-height: 400px;
        overflow-y: auto;
        ul li {
          margin-bottom: 50px;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0);
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.COLORS.PRICE};
          border-radius: 100px;
        }

        ::-webkit-scrollbar-button:start:decrement {
          height: 50px;
          display: block;
          background-color: transparent;
        }

        ::-webkit-scrollbar-button:end:increment {
          height: 10px;
        }
      }

      .action-buttons {
        margin-top: 32px;
        display: grid;
        gap: 12px;
      }

      .content-payment {
        max-width: 550px;
        margin: 0 auto;
        .payment {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .payment-method:first-child {
          svg {
            transform: rotate(46deg);
          }
        }

        .payment-method {
          width: 100%;
          height: 100px;
          background: transparent;
          border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-weight: 400;
          font-size: 16px;
          font-family: 'Roboto', sans-serif;
          gap: 8px;
          svg {
            font-size: 24px;
          }
        }

        .payment-method:focus {
          transition: 0.5s;
          background: rgba(255, 255, 255, 0.05);
        }

        .payment-method:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .payment-confirm {
          width: 100%;
          height: 400px;
          border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
          display: flex;
          justify-content: center;
          align-items: center;

          .credit {
            width: 100%;
            margin: 40px 60px;
            display: grid;

            label {
              text-align: left;
              margin-bottom: 20px;
              font-weight: 400;
              font-size: 16px;
              font-family: 'Roboto', sans-serif;
              color: ${({ theme }) => theme.COLORS.GRAY_300};
            }
            .wrapper {
              margin: 32px 0;
              display: flex;
              gap: 20px;
              .validate {
                display: flex;
                flex-wrap: wrap;
              }
            }
          }

          .active {
            display: none;
          }
        }
      }
    }
  }

  @media (min-width: 700px) {
    .main-content {
      .container {
        .action-buttons {
          display: flex;
          >:nth-child(2) {
            white-space: nowrap;
          }
        }
      }
    }
  }
  @media (min-width: 800px) {
    .main-content {
      display: flex;
      max-width: 1120px;
      padding: 0 24px;
      margin: 64px auto 0;
      justify-content: space-between;
      gap: 32px;
      .container {
        padding: 0;

        .demand {
          max-height: 100%;
          height: 485px;
          margin: 0;
        }
      }
    }
  }
`

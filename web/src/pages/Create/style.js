import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;

  section {
    width: 100%;

    padding: 0 24px;
    margin-top: 48px;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 48px;
      h1 {
        font-weight: 500;
        font-size: 28px;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
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

    .content-wrapper {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-weight: 400;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 128px;
      .content-img {
        margin: 0;
      }

      .name {
        margin-top: 32px;
        display: grid;
        gap: 8px;
      }

      .price-ingredientes {
        display: grid;
        gap: 32px;
        label {
          margin-bottom: 8px;
        }
      }

      .price {
        width: 100%;
        display: grid;
      }

      label:nth-child(2) {
        width: 229px;
        height: 58px;
        margin-top: 8px;
        border: 1px solid #ffffff;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        input {
          display: none;
        }
        svg {
          width: 30px;
          height: 30px;

          margin-right: 8px;
        }
        :hover {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
      }

      textarea {
        margin-top: 8px;
        margin-bottom: 28px;
      }

      .content {
        /* margin-top: 32px; */
        display: grid;
      }

      .submit {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 10px;
        cursor: pointer;
        :hover {
          background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
      }

      .ingredient {
        padding: 8px;
        border: 1px solid white;
        width: 100%;
        min-height: 62px;
        border-radius: 10px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 8px;
      }
    }
  }

  @media (min-width: 800px) {
    section {
      max-width: 1120px;
      margin: 48px auto;

      .content-wrapper {
        margin-bottom: 64px;
        .button-submit {
          width: 350px;
          margin: 0 0 0 auto;
        }

        .content {
          display: flex;
          gap: 20px;
          div:last-child {
            width: 100%;
          }
        }
        .name {
          margin-top: 0;
        }

        .price-ingredientes {
          display: flex;
          div:first-child {
            .ingredient {
              width: 620px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1100px) {
    section {
      .content-wrapper {
        .price-igredientes {
          div:first-child {
            .ingredient {
              width: 820px;
            }
          }
        }
      }
    }
  }
`

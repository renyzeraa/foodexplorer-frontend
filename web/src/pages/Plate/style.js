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
      margin-bottom: 24px;
      display: grid;
      gap: 24px;
      justify-content: start;
      h1 {
        font-weight: 500;
        font-size: 32px;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }

      a {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }

    .content-wrapper {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 16px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 128px;
      .content-img {
        margin: 0;
      }

      .name-category {
        margin-top: 32px;
        display: grid;
        gap: 8px;
        > :nth-child(2) {
          grid-area: 2;
        }

        input,
        select {
          border: none;
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
          color: ${({ theme }) => theme.COLORS.GRAY_200};
        }

        select {
          border-radius: 5px;
          padding: 16px 16px 16px 8px;
          font-family: 'Roboto';
          font-size: 16px;
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
      }

      .price-ingredientes {
        display: grid;
        gap: 32px;
        .ingredient {
          border: none;
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
        }
        label {
          margin-bottom: 8px;
        }
      }

      .price {
        width: 100%;
        display: grid;

        input {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
        }
      }

      label:nth-child(2) {
        height: 58px;
        margin-top: 8px;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
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
        border: none;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      }

      .content {
        display: grid;
      }
      .button-submit {
        .edit-plate {
          display: flex;
          gap: 32px;
          cursor: pointer;
          input {
            cursor: pointer;
            :hover {
              filter: brightness(1.2);
            }
          }
        }
        .submit {
          background: ${({ theme }) => theme.COLORS.TOMATO};
          border-radius: 10px;
          cursor: pointer;
          :hover {
            filter: brightness(1.2);
          }
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

  @media (min-width: 768px) {
    section {
      .content-wrapper {
        .price-ingredientes {
          .price {
            div {
              background-color: ${({ theme }) =>
                theme.COLORS.BACKGROUND_INPUT} !important;
            }
          }
        }
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
          gap: 32px;

          label {
            width: 220px;
            :nth-child(2) {
              padding: 16px 24px;
            }
          }

          div:last-child {
            width: 100%;
          }
        }
        .name-category {
          margin-top: 0;
          grid-template-columns: 1fr 1fr;
          gap: 8px 32px;
          :nth-child(2) {
            grid-area: 2;
          }
        }

        .price-ingredientes {
          display: flex;
          .content-ingredientes {
            width: 100%;
          }
          .price {
            width: 150px;
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

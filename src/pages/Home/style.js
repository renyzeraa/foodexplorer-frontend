import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  > main {
    margin-top: 72px;
    .header-content {
      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      height: 120px;
      margin: 0 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .img-content {
        img {
          width: 255px;
          position: absolute;
          top: 128px;
          left: -15px;
          z-index: 0;
        }
      }

      .text-content {
        text-align: left;
        padding: 20px;
        z-index: 0;
        width: 240px;

        h1 {
          font-weight: 500;
          font-size: 18px;
        }
        p {
          font-weight: 400;
          font-size: 12px;
          color: ${({ theme }) => theme.COLORS.GRAY_100};
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
        margin-bottom: 23px;
      }
    }

    .content:last-child {
      margin-bottom: 120px;
    }
  }

  @media (min-width: 550px) {
    main {
      .header-content {
        height: 140px;
        max-width: 1050px;
        align-items: center;
        margin: 0 24px;

        .img-content {
          img {
            width: 341px;
            position: absolute;
            top: 94px;
          }
        }
        .text-content {
          text-align: left;
          width: 355px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    main {
      margin-top: 124px;
      min-height: 70%;
      .header-content {
        height: 260px;
        .img-content {
          position: relative;
          img {
            width: 600px;
            top: -235px;
            left: -62px;
          }
        }
        .text-content {
          text-align: left;
          width: auto;
          h1 {
            font-size: 40px;
          }
          p {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
          }
        }
      }
    }
  }

  @media (min-width: 1100px) {
    main {
      .header-content {
        margin: 0 auto;
      }
    }
  }
`

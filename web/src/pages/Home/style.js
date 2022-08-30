import styled from 'styled-components'

export const Container = styled.div`
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
          z-index: 1;
        }
      }

      .text-content {
        text-align: center;
        padding: 20px;
        z-index: 2;
        width: 300px;

        h1 {
          font-weight: 500;
          font-size: 40px;
        }
      }
    }
  }

  @media (min-width: 550px) {
    main {
      header {
        max-width: 1050px;
        align-items: center;
        margin: 0 auto;

        .img-content {
          img {
            width: 460px;
            position: absolute;
            top: 127px;
            z-index: 1;
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

  @media (min-width: 1200px) {
    main {
      header {
        margin: 0 auto;
      }
    }
  }
`

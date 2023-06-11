import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;

  .desktop {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  .mobile {
    width: 100%;
    height: 90px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    .logo-header {
      display: flex;
      align-items: flex-end;
      position: absolute;
      z-index: 4;
      img {
        width: 141px;
        margin-right: 8px;
      }
      .admin-logo {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.PRICE};
      }
    }

    .logo-header.change {
      display: none;
    }

    .input {
      margin: 54px 0 36px;

      > div {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      }
    }

    #menu {
      width: 35px;
      height: 30px;
      margin: 36px 24px 24px 24px;
      cursor: pointer;
    }
    .bar {
      height: 5px;
      width: 100%;
      background-color: #ffff;
      display: block;
      border-radius: 5px;
      transition: 0.3s ease;
    }
    #bar1 {
      transform: translateY(-4px);
    }
    #bar3 {
      transform: translateY(4px);
    }

    .nav {
      padding: 0 28px;
      transition: 0.3s ease;
      display: none;

      li {
        border-bottom: 1px solid #192227;
        &:nth-child(n + 1) {
          padding: 16px 0;
        }

        a {
          font-family: 'Poppins';
          font-weight: 300;
          font-size: 24px;
          line-height: 140%;
          color: ${({ theme }) => theme.COLORS.GRAY_100};
          &:hover {
            font-weight: 400;
          }
        }
      }
    }

    .menu-bg,
    #menu-bar {
      top: 0;
      left: 0;
      position: absolute;
    }
    .menu-bg {
      z-index: 2;
      width: 0;
      height: 0;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      transition: 0.3s ease;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    #menu-bar {
      z-index: 3;
      width: 100%;
    }
    #menu-bar.change {
      position: fixed;
    }
    .change-bg {
      width: 100vw;
      height: 100vh;
      transform: translate(0%, 0%);
      box-shadow: inset 0px 86px 0px 0px
        ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
    .change .bar {
      background-color: white;
    }
    .change #bar1 {
      transform: translateY(4px) rotateZ(-45deg);
    }
    .change #bar3 {
      transform: translateY(-6px) rotate(45deg);
    }
    .change #bar2 {
      opacity: 0;
    }
    .change {
      display: block;
    }

    .icon-receipt {
      position: absolute;
      right: 24px;
      z-index: 3;

      & svg {
        font-size: 24px;
      }
      .count-itens {
        position: absolute;

        left: 12px;
        top: -8px;
        background-color: ${({ theme }) => theme.COLORS.RED};
        border-radius: 50%;
        font-size: 14px;
        width: 18px;
        height: 18px;

        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: bold;
      }
    }

    .icon-receipt.change {
      display: none;
    }
  }

  @media (min-width: 800px) {
    .mobile {
      display: none;
      opacity: 0;
      visibility: hidden;
    }
    .desktop {
      opacity: 1;
      visibility: visible;

      max-width: 1120px;
      height: 90px;
      padding: 21px 24px;
      display: flex;

      justify-content: space-between;
      margin: 0 auto;
      align-items: center;

      a {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }

      .admin-links {
        margin: 0px 24px;
      }

      .logo-content.admin {
        position: relative;
        ::after {
          content: 'admin';
          font-family: 'Roboto';
          position: absolute;
          bottom: -9px;
          right: -1px;
          font-style: normal;
          font-size: 12px;
          color: ${({ theme }) => theme.COLORS.PRICE};
        }
      }

      a img {
        width: 141px;
      }

      .input {
        width: 298px;
        margin: 0px 24px;
        > div {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
          border: none;
        }
      }

      .input.admin {
        width: 500px;
      }

      button {
        width: 179px;
        padding: 12px 18px;
        margin-right: 12px;
      }

      .cart {
        margin: 0 16px 0 0;
        font-size: 28px;
        position: relative;
        .count-itens {
          position: absolute;

          left: 18px;
          top: -8px;
          background-color: ${({ theme }) => theme.COLORS.RED};
          border-radius: 50%;
          font-size: 14px;
          width: 18px;
          height: 18px;

          text-align: center;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-weight: bold;
        }
      }
    }
  }
`

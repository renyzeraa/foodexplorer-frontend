import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
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

    a img {
      width: 141px;
      margin-right: 16px;
    }

    .input {
      width: 400px;
      margin-right: 60px;
    }

    #menu {
      width: 35px;
      height: 30px;
      margin: 34px 24px 24px 68px;
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
    .nav li a {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: right;
      gap: 8px;
      font-size: 17px;
    }

    .nav li a:hover {
      font-weight: bold;
    }
    .nav li {
      list-style: none;
      padding: 16px 0;
    }
    .nav {
      padding: 0;
      margin: 0 20px;
      transition: 0.3s ease;
      display: none;
    }
    .menu-bg,
    #menu-bar {
      top: 0;
      right: 0;
      position: absolute;
    }
    .menu-bg {
      z-index: 2;
      width: 0;
      height: 0;
      margin: 30px 0 20px 0;
      background: radial-gradient(circle, #1d3f52, #000b10);
      border-radius: 10px;
      transition: 0.3s ease;
      border: 1px solid #2485e938;
    }
    #menu-bar {
      z-index: 3;
    }
    .change-bg {
      width: 180px;
      height: 480px;
      transform: translate(7%, -39%);
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

      justify-content: space-around;
      margin: 0 auto;
      align-items: center;

      a {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-weight: 400;
        font-size: 16px;
      }

      a img {
        width: 141px;
        margin-right: 16px;
      }

      .input {
        width: 400px;
        margin-right: 16px;
      }

      button {
        width: 216px;
        display: flex;
        padding: 12px 12px 12px 0;
      }

      .cart {
        margin: 0 16px 0 0;
        font-size: 28px;
        position: relative;
        span {
          position: absolute;

          left: 18px;
          top: -8px;
          background-color: red;
          border-radius: 50%;
          font-size: 14px;
          width: 18px;
          height: 18px;

          text-align: center;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-weight: bold;
        }
      }

      .signout {
        margin-left: 16px;
        font-size: 24px;
      }
    }
  }
`

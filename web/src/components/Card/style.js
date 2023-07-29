import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
  border-radius: 8px;
  position: relative;

  .btn-fav {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 30px;
  }

  .container {
    padding: 20px;
    display: grid;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    img {
      margin: 16px auto 16px;
      width: 176px;
      height: 176px;
      border-radius: 50%;
      cursor: pointer;
    }
    .product-title {
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: 'Poppins', sans-serif;
      margin-bottom: 16px;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }

    .description {
      font-weight: 400;
      font-size: 14px;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
      margin-bottom: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .price-title {
      color: ${({ theme }) => theme.COLORS.PRICE};
      font-weight: 400;
      font-size: 28px;
      margin-bottom: 12px;
    }

    .content-includes {
      display: flex;
      font-size: 20px;
      align-items: center;
      justify-content: center;
      .btn {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 20px;
        margin: 10px;
      }

      .count-item {
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        padding: 1px 3px;
        border-radius: 2px;
      }
      button {
        max-width: 92px;
      }
    }
  }
`

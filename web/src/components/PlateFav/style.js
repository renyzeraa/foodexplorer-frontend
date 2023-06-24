import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 13px;
  padding: 16px 0px;
  align-items: center;
  width: 100%;

  img {
    width: 72px;
    height: 72px;
    border-radius: 72px;
  }

  .description-content {
    display: grid;
    text-align: left;

    .title-plate {
      font-size: 20px;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .remove-fav {
      font-size: 12px;
      font-family: 'Roboto', sans-serif;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.TOMATO};
      cursor: pointer;

      &:hover {
        transition: all 0.5s;
        font-weight: 600;
      }
    }
  }

  @media (min-width: 768px) {
    width: 250px;
  }
`

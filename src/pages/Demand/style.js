import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    height: 100vh;
    padding: 0 24px;
    margin-top: 48px;
    margin-bottom: 48px;
    height: auto;
    min-height: 100%;
    
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

    .table-wrapper {
      display: none;
    }

    .cards-wrapper {
      display: grid;
      gap: 17px;
    }
  }

  @media (min-width: 768px) {
    section {
      max-width: 1120px;
      margin: 48px auto;
      

      .table-wrapper {
        display: block;
        width: 100%;
        border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius: 10px 10px 0 0;
        margin-bottom: 48px;
        table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Roboto', sans-serif;

          thead tr td {
            border-bottom: 2px solid
              ${({ theme }) => theme.COLORS.BACKGROUND_700};
            border-right: 2px solid
              ${({ theme }) => theme.COLORS.BACKGROUND_700};
            padding: 16px 12px;

            text-align: left;
            font-weight: 700;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
          }

          thead tr td:last-child {
            border-right: none;
          }

          thead tr td:first-child {
            width: 170px;
          }

          tbody td {
            text-align: left;
            padding: 12px;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
            font-weight: 400;
            font-size: 14px;
            border-right: 2px solid
              ${({ theme }) => theme.COLORS.BACKGROUND_700};
            border-bottom: 2px solid
              ${({ theme }) => theme.COLORS.BACKGROUND_700};
          }

          tbody td:first-child {
            width: 170px;
          }

          tbody td:last-child {
            border-right: none;
          }

          tbody tr:last-child td {
            border-bottom: none;
          }

          .rows-demands {

          }
        }
      }
      .cards-wrapper {
        display: none;
      }
    }
  }

  @media (min-width: 1120px) {
    section {
      width: 1120px;
      
    }
  }
`

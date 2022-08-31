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
      width: 100%;
      border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 10px 10px 0 0;
      margin-bottom: 48px;
      table {
        width: 100%;
        border-collapse: collapse;
        font-family: 'Roboto', sans-serif;

        thead tr td {
          border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
          border-right: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
          padding: 16px 12px;

          text-align: left;
          font-weight: 700;
          font-size: 14px;
          color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        thead tr td:last-child {
          border-right: none;
        }

        tbody tr td select {
          font-family: 'Roboto', sans-serif;
          font-weight: bold;
          font-size: 14px;
          background: transparent;
          color: ${({ theme }) => theme.COLORS.GRAY_100};
          padding: 4px 2px;
          border-radius: 4px;

          option {
            color: black;
          }
        }

        tbody td {
          text-align: center;
          padding: 6px;
          color: ${({ theme }) => theme.COLORS.GRAY_200};
          font-weight: 400;
          font-size: 14px;
          border-right: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
          border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }

        tbody td:last-child {
          border-right: none;
        }

        tbody tr:last-child td {
          border-bottom: none;
        }
      }
    }
  }

  @media (min-width: 800px) {
    section {
      max-width: 1120px;
      margin: 48px auto;

      .table-wrapper {
        table tbody td {
          text-align: left;
          padding: 12px;
        }

        table tbody td {
          text-align: center;
        }
        table tbody tr td select {
          padding: 12px 12px;
        }
      }
    }
  }

  @media (min-width: 1120px) {
    section {
      width: 1120px;
    }
  }
`

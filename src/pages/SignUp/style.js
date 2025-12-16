import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 24px;
    display: grid;
    align-items: center;
    height: 100vh;
    .content-logo img {
        max-width: 100%;
    }

    .content-logo {
        margin: 42px 0;
        padding: 64px;
        display: flex;
        justify-content: center;
    }

    .content-login {
        padding: 32px;
        width: 100%;

        border-radius: 16px;
    }

    @media (min-width: 800px) {
        margin: 0 auto;
        max-width: 1120px;

        main {
            margin: 90px 64px 0;
            display: flex;
            justify-content: space-between;
            display: flex;
            flex-direction: row;
            align-content: center;

            .content-logo {
                padding: 0;
            }

            .content-login {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
                padding: 64px;
                max-width: 470px;
            }
        }
    }
`

export const Form = styled.form`
    h1 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 30px;
        line-height: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    p {
        margin-top: 32px;
        margin-bottom: 8px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
    }

    button {
        margin: 32px 0;
    }

    > a {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        font-family: 'Poppins', sans-serif;
        margin: 0 auto;
        color: ${({ theme }) => theme.COLORS.WHITE};

        display: flex;
        justify-content: center;
    }
`

import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius: 8px;
        border: none;
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
        :focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
    }
    svg {
        margin-left: 12px;
    }

    @media (min-width: 768px) {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`

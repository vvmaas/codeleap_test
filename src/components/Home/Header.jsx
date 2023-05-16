import styled from "styled-components"

export default function Header() {
    return (
        <Container>
            <h1>CodeLeap Network</h1>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    height: 10vh;
    max-height: 80px;
    background-color: #7695EC;
    display: flex;
    align-items: center;

    h1 {
        color: white;
        margin-left: 23px;
        font-size: 23px;
        font-weight: bold;
    }
`
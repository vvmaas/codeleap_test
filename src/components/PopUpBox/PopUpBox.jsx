/* eslint-disable react/prop-types */
import styled from "styled-components"

export default function CenterBox({children, ...props}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    height: fit-content;
    width: fit-content;
    background-color: white;
    border: 1px solid #CCCCCC;
    border-radius: 16px;
    display: flex;
    justify-content: center;
`
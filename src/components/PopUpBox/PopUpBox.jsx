/* eslint-disable react/prop-types */
import styled from "styled-components"

export default function PopUpBox({children, ...props}) {
    return (
        <Container {...props}>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
    height: fit-content;
    width: 100%;
    max-width: 650px;
    background-color: white;
    border: 1px solid #CCCCCC;
    border-radius: 16px;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    display: ${(props) => (props.display ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    top: 0%;
    right: 0%;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #63636351;
`
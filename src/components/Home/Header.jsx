import styled from "styled-components"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, userLogout } from "../../redux/userSlice"

export default function Header() {
    let { name } = useSelector(selectUser)
    const log = JSON.parse(localStorage.getItem("codeleap_network"))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if(log) {
        name = log.user
    }

    useEffect(() => {
        if(!name) {
            navigate('/sign-up');
        }
    }, [name])

    function logout() {
        localStorage.removeItem("codeleap_network")
        dispatch(userLogout())
        navigate('/sign-up')
    }

    return (
        <Container>
            <h1>CodeLeap Network</h1>
            <UserMenu>
                <p>Logged as<Name>{name}</Name></p>
                <Logout onClick={() => logout()}>Logout</Logout>
            </UserMenu>
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
    justify-content: space-between;
    align-items: center;

    h1 {
        color: white;
        margin-left: 23px;
        font-size: 23px;
        font-weight: bold;
    }
`

const UserMenu = styled.div`
    margin-right: 23px;
    display: flex;
    flex-direction: column;
    align-items: end;

    p{
        color: #f4f5f6;
        font-size: 18px;
        display: flex;
    }
`

const Logout = styled.p`
    text-decoration: underline;
    margin-top: 5px;
    cursor: pointer;
    :hover {
        color: white;
    }
`

const Name = styled.p`
    color: white !important;
    font-size: 18.5px !important;
    font-weight: bold !important;
    margin-left: 5.5px !important;
`
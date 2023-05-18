import styled from "styled-components"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectUser } from "../../redux/userSlice"
import { userLogout } from "../../redux/userSlice"

export default function Header() {
    const { name } = useSelector(selectUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if(!name){
        navigate('/sign-up')
    }

    console.log(name.length);

    function logout() {
        dispatch(userLogout())
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

const Name = styled.h6`
    color: white;
    font-size: 18.5px;
    font-weight: bold;
    margin-left: 5.5px;
`
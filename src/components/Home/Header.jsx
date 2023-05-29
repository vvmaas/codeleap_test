import styled from "styled-components"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userLogout } from "../../redux/userSlice"
import getUser from "../../utils/getUser"

export default function Header() {
    const name = getUser();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                <div>Logged as<Name>{name}</Name></div>
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

    @media (max-width: 700px){
        h1 {
        width: 30vw;
        color: white;
        margin-left: 16px;
        font-size: 21px;
        font-weight: bold;
    }
    }
`

const UserMenu = styled.div`
    margin-right: 23px;
    display: flex;
    flex-direction: column;
    align-items: end;

    p, div{
        color: #f4f5f6;
        font-size: 18px;
        display: flex;
    }

    @media (max-width: 700px) {
        margin-right: 16px;

        p, div{
        color: #f4f5f6;
        font-size: 16px;
        display: flex;
    }
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

    @media (max-width: 700px){
        font-size: 17px !important;
        margin-left: 5px !important;
    }
`
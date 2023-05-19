import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

export default function getUser(){
    let { name } = useSelector(selectUser);
    const log = JSON.parse(localStorage.getItem("codeleap_network"))

    if(log) {
        name = log.user
    }

    return name
}
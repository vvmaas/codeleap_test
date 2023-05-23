import PopUpBox from "../../components/PopUpBox/PopUpBox";
import SignUpContent from "../../components/PopUpBox/SignUpContent";

export default function SignUp() {
    return(
            <PopUpBox display={true}>
                <SignUpContent />
            </PopUpBox>
    );
}
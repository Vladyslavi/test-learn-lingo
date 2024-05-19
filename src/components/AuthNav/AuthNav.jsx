import {
    AuthContainer,
    AuthBtnLogin,
    AuthBtnRegister

} from './AuthNav.styled';
import { LuLogIn } from 'react-icons/lu';

const AuthNav = () => {
    return (
        <AuthContainer>
            <AuthBtnLogin to='/' login='true'>
                <span><LuLogIn /></span>
                Login
            </AuthBtnLogin>
            <AuthBtnRegister to='/'>Registration</AuthBtnRegister>
        </AuthContainer>
    )
}

export default AuthNav
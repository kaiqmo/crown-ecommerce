import React,{useState} from 'react';

import './sign-in.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';



const SignInAndSignUpPage = () => {
    const [sign,setSign] = useState(0);
    console.log(sign);
    return (
        <div className='sign-in-and-sign-up'> 
            {   sign == 0 ? 
                <SignIn />  :   <SignUp />
            }
            <div  className="toggle-switch">
                <input type="checkbox" className="checkbox" 
                    name='Logar' id='Logar' />
                <label 
                    className="label" 
                    htmlFor='Logar' 
                    onClick = {() =>{
                        sign == 0 ? setSign(sign+1) : setSign(sign-1)
                    }} >
                <span className="inner" />
                </label>
            </div>
        </div>
    )
}
export default SignInAndSignUpPage;
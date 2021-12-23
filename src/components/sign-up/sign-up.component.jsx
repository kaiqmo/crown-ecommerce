import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, CreateUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();
        
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event =>{
        ///prevent default submit
        event.preventDefault();
        const { displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Password dont match');
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
             await CreateUserProfileDocument(user,{displayName});
             this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
             });
        }catch(error){
            if(error.code === "auth/email-already-in-use")
                alert("Email already registered!");
            console.error(error);
        }
    }
    handleChange = event =>{
        const {name,value}  = event.target;
        this.setState({ [name]: value});
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>
                    I dont not have a account
                </h2>
                <span> Sign up with your Email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
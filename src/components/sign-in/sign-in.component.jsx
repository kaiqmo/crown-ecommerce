import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';

export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = async event=>{
        event.preventDefault();
        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});

        }catch(error){
            console.error(error);
        }
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name] : value});
    }
    render(){
        return (
            <div className='sign-in'>
                <h2>Já tenho conta</h2>
                <span>Entre com email e senha</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' type='email' 
                        label='Email'
                        handleChange={this.handleChange}
                        value={this.state.email} required />
                    
                    <FormInput
                        name='password' type='password'
                        label='Senha'
                        handleChange={this.handleChange}  
                        value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButton type='submit' >Entrar</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Entrar com Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
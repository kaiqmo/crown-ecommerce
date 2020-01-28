import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage.component';

import ShopPage from './pages/shop/shop.component.jsx';

import Header from './components/header-component/header-component.jsx';

import SignInAndSignUpPage from './pages/sign-in/sign-in.component.jsx';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth){
        const userRef = await CreateUserProfileDocument(userAuth);
        
        userRef.onSnapshot( snapShot =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, ()=>{
            // unico jeito de vizualizar dps de um setstate eh no callback console.log(this.state);
          });
        });
      }
      this.setState({ currentUser:userAuth});
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

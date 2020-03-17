import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import Homepage from './pages/homepage.component';

import ShopPage from './pages/shop/shop.component.jsx';

import Header from './components/header-component/header-component.jsx';

import {setCurrentUser} from './redux/user/user.actions';

import SignInAndSignUpPage from './pages/sign-in/sign-in.component.jsx';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  
  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth){
        const userRef = await CreateUserProfileDocument(userAuth);
        
        userRef.onSnapshot( snapShot =>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });
        });
      }
        setCurrentUser(userAuth);
      });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}); 

export default connect(null,mapDispatchToProps)(App);

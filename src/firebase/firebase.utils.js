import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// sempre precisa importa o firease completo pra dps poder dar import no store e auth
const config  = {
    apiKey: "AIzaSyDuHTtUoxaEUp7Bc05pmaDE6Quukvp0k1A",
    authDomain: "udemy-crown-41095.firebaseapp.com",
    databaseURL: "https://udemy-crown-41095.firebaseio.com",
    projectId: "udemy-crown-41095",
    storageBucket: "udemy-crown-41095.appspot.com",
    messagingSenderId: "468641248743",
    appId: "1:468641248743:web:f2b938d84adb228955f942",
    measurementId: "G-H9HBJ6PSFX"
  };

  export const CreateUserProfileDocument = async (userAuth, additionalData) =>{
      if(!userAuth) return; // if the user doesnt exist
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        //console.log(userRef);

        const snapShot = await userRef.get();
        //console.log(snapShot);

        const userCollection = firestore.collection('users');
        //console.log(userCollection); // show collection users

        const snapShotCollection = await userCollection.get();
        //console.log({ collection : snapShotCollection.docs.map(doc =>doc.data())}); // show the json of users

        if(!snapShot.exists){
          const { displayName, email} = userAuth;
          const createdAt = new Date();
          // se o usuario nao existe ele faz um novo!
          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

          }catch(error){
              console.log('error creating user',error.message);
          }
        }
        //console.log(snapShot);
        return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey,ObjectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();

    ObjectsToAdd.forEach(obj =>{
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj);
    })

    return await batch.commit();

  }

  export const convertCollectionsSnapshotToMap = (collections) =>{
    const transformedCollections = collections.docs.map(doc =>{
      const {title, items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    });
    return transformedCollections.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
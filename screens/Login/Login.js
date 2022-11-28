import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { Button } from 'react-native';
import axios from 'axios'

WebBrowser.maybeCompleteAuthSession();

export default function Login() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '370176267697-a5pi7mvcfsel92fujlaejdoroml10d0j.apps.googleusercontent.com',
    },
  );

  React.useEffect(() => {
    try{
      if (response?.type === 'success') {
        const { id_token } = response.params;
        const auth = getAuth();
        console.log(response.params.id_token)
        const credential = GoogleAuthProvider.credential(id_token);
        singInFirebaseWithCredentials(auth, credential)

        requestExample()
      }
    }catch(err){
      console.log(err)
    }

  }, [response]);

  const singInFirebaseWithCredentials = async(auth, credential) => {
    console.log(await signInWithCredential(auth, credential));
  }

  const requestExample = async() => {
    try{
      const res = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${response.params.id_token}`)
  
      console.log(res)
    }catch (err){
      console.log(err)
    }

  }

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
import { useContext, useState } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';
import { writeDataToFirestore, checkIfDocExist, getUserData } from '../util/firebase';
import MessageSuccess from '../components/ui/MessageSuccess';

function LoginScreen({ route }) {

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);


  const isCreated = route.params?.isCreated;

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      const docExists = await checkIfDocExist('userCharacteristics', email);
      if (docExists) {
        const userData = await getUserData('userCharacteristics', email);
        authCtx.getUserData(userData);
        console.log(userData);

        console.log('Doc existed!');
      } else {
        await writeDataToFirestore('userCharacteristics', email, {
          userId: email,
        })
        const userData = await getUserData('userCharacteristics', email);
        authCtx.getUserData(userData);
        console.log(userData);
      }
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <AuthContent isLogin onAuthenticate={loginHandler} />
    // <View style={styles.container}>
    //   {/* {isCreated && <MessageSuccess message="Account created successfully!" />} */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default LoginScreen;

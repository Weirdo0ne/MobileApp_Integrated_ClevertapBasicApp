import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Alert 
} from 'react-native';
import { AppContext } from '../context/AppContext';

const CleverTap = require('clevertap-react-native');

export default function LoginScreen({ navigation }: any) {
  const { users, setCurrentUser } = useContext(AppContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Clean inputs: Remove accidental trailing spaces
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    // Security Check: Search global AppContext list
    const foundUser = users.find(
      (u: any) => u.email.toLowerCase() === cleanEmail.toLowerCase() && u.password === cleanPassword
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      
      // CleverTap identification
      CleverTap.onUserLogin({ 
        Identity: foundUser.email, 
        Email: foundUser.email,
        Name: foundUser.username 
      });

      navigation.replace('Home');
    } else {
      Alert.alert(
        "Access Denied", 
        "No account found with these credentials. Please Sign Up first."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>GmZ</Text>
      <Text style={styles.subtitle}>Level Up Your Library</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Email ID" 
          placeholderTextColor="#aaa"
          style={styles.input} 
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />
        
        <View style={styles.passwordWrapper}>
          <TextInput 
            placeholder="Password" 
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
            style={styles.passwordInput} 
            onChangeText={setPassword} 
          />
          <TouchableOpacity 
            style={styles.eyeBtn} 
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.eye}>{showPassword ? '👁️' : '🙈'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>
          New Player? <Text style={styles.signUpLink}>Create Account</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', padding: 25 },
  logo: { fontSize: 60, fontWeight: '900', color: '#fff', textAlign: 'center', letterSpacing: 5 },
  subtitle: { color: '#8A2BE2', textAlign: 'center', marginBottom: 40, fontWeight: 'bold' },
  inputContainer: { marginBottom: 20 },
  input: { 
    backgroundColor: '#1E1E1E', 
    color: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15, 
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  passwordWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#1E1E1E', 
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: '#333'
  },
  passwordInput: { 
    color: '#fff', 
    padding: 15, 
    flex: 1, 
    fontSize: 16 
  },
  eyeBtn: { padding: 10, marginRight: 5 },
  eye: { fontSize: 20 },
  loginBtn: { backgroundColor: '#8A2BE2', padding: 18, borderRadius: 10, marginTop: 10 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 },
  linkText: { color: '#ccc', textAlign: 'center', marginTop: 25 },
  signUpLink: { color: '#8A2BE2', fontWeight: 'bold' }
});
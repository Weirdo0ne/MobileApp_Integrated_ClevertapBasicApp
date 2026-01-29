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

// Import CleverTap
const CleverTap = require('clevertap-react-native');

export default function SignUpScreen({ navigation }: any) {
  const { users, setUsers } = useContext(AppContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Clean data for the dashboard
    const cleanUsername = username.trim();
    const cleanEmail = email.toLowerCase().trim();
    const cleanPassword = password.trim();

    // 1. Basic empty field validation
    if (!cleanUsername || !cleanEmail || !cleanPassword) {
      Alert.alert("Error", "All fields are required to join the GmZ Guild!");
      return;
    }

    // 2. Gmail validation logic
    if (!cleanEmail.endsWith('@gmail.com')) {
      Alert.alert("Invalid Email", "Only @gmail.com addresses are allowed for security.");
      return;
    }

    // 3. Duplicate User Check
    const userExists = users.find((u: any) => u.email.toLowerCase() === cleanEmail);
    if (userExists) {
      Alert.alert("Already Registered", "This email is already in our database. Try logging in!");
      return;
    }

    // --- CLEVERTAP INTEGRATION START ---
    // Push Profile to CleverTap immediately upon account creation
    CleverTap.onUserLogin({
      'Name': cleanUsername,
      'Identity': cleanEmail, // Unique ID for the user
      'Email': cleanEmail,
      'MSG-push': true,       // Enables push notifications capabilities
      'MSG-email': true       // Enables email capabilities
    });
    // --- CLEVERTAP INTEGRATION END ---

    // 4. Save User to Global State
    setUsers([...users, { username: cleanUsername, email: cleanEmail, password: cleanPassword }]);
    
    // 5. Success Message & Redirect
    Alert.alert(
      "Welcome to GmZ!", 
      "Account created successfully. You can now login.",
      [{ text: "GO TO LOGIN", onPress: () => navigation.navigate('Login') }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>GmZ</Text>
      <Text style={styles.title}>New Player Registration</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Choose Username" 
          placeholderTextColor="#aaa"
          style={styles.input} 
          onChangeText={setUsername} 
        />
        
        <TextInput 
          placeholder="Gmail ID (@gmail.com)" 
          placeholderTextColor="#aaa"
          style={styles.input} 
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <View style={styles.passwordWrapper}>
          <TextInput 
            placeholder="Create Password" 
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
            style={[styles.input, { flex: 1, marginBottom: 0 }]} 
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

      <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
        <Text style={styles.btnText}>JOIN THE GUILD</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Already a member? <Text style={styles.loginLink}>Login</Text></Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', padding: 25 },
  logo: { fontSize: 40, fontWeight: '900', color: '#fff', textAlign: 'center' },
  title: { color: '#8A2BE2', textAlign: 'center', marginBottom: 30, fontSize: 16, fontWeight: 'bold' },
  inputContainer: { marginBottom: 20 },
  input: { backgroundColor: '#1E1E1E', color: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16 },
  passwordWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#1E1E1E', 
    borderRadius: 10, 
    paddingRight: 5 
  },
  eyeBtn: { padding: 10 },
  eye: { fontSize: 20 },
  signupBtn: { backgroundColor: '#28A745', padding: 18, borderRadius: 10, marginTop: 10 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 },
  linkText: { color: '#ccc', textAlign: 'center', marginTop: 25 },
  loginLink: { color: '#8A2BE2', fontWeight: 'bold' }
});
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientBackground from '@/components/GradientBackground';

export default function WelcomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      // Simple validation - in a real app, you'd validate against a backend
      if (email.includes('@') && password.length >= 6) {
        router.push('/(tabs)');
      } else {
        Alert.alert('Invalid Credentials', 'Please check your email and password.');
      }
    } else {
      Alert.alert('Missing Information', 'Please enter both email and password.');
    }
  };

  const handleSignUp = () => {
    router.push('/login');
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.content}>
            <Text style={styles.title}>WELCOME!!</Text>
            
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.signUpContainer} onPress={handleSignUp}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Don't have an account?</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpLink}>Sign up now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 80,
    letterSpacing: 2,
  },
  formContainer: {
    marginBottom: 60,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 18,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: 'white',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  forgotPassword: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  loginButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 25,
    paddingVertical: 18,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
  signUpContainer: {
    alignSelf: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    marginRight: 5,
  },
  signUpLink: {
    color: '#E91E63',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
});
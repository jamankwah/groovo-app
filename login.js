import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientBackground from '@/components/GradientBackground';

export default function LoginScreen() {
  const handleContinueWithEmail = () => {
    router.push('/signup');
  };

  const handleContactUs = () => {
    // Handle contact us action
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>LOG INTO GROOVO</Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonIcon}>G</Text>
              <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonIcon}>🍎</Text>
              <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonIcon}>f</Text>
              <Text style={styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={handleContinueWithEmail}>
              <Text style={styles.buttonIcon}>✉</Text>
              <Text style={styles.buttonText}>Continue with Email</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Having trouble signing in? </Text>
            <TouchableOpacity onPress={handleContactUs}>
              <Text style={styles.contactLink}>Contact us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 80,
    letterSpacing: 1,
  },
  buttonContainer: {
    marginBottom: 60,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 25,
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 20,
    color: 'white',
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
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
  },
  contactLink: {
    color: '#E91E63',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
});

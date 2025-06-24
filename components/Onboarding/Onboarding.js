import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const artistProfiles = [
  { id: '1', image: 'https://assets/black.png?img=1', size: 90, top: 200, left: 80 },
  { id: '2', image: 'https://i.pravatar.cc/100?img=2', size: 90, top: 300, left: 90 },
  { id: '3', image: 'https://i.pravatar.cc/70?img=3', size: 90, top:200 , left: 250 },
  { id: '4', image: 'https://i.pravatar.cc/90?img=4', size: 60, top: 280, left: 25 },
  { id: '5', image: 'https://i.pravatar.cc/85?img=5', size: 90, top: 310, left:250},
  { id: '6', image: 'https://i.pravatar.cc/75?img=6', size: 70, top: 400, left: 220 },
  { id: '7', image: 'https://i.pravatar.cc/95?img=7', size: 65, top: 370, left: 40 },
  { id: '8', image: 'https://i.pravatar.cc/80?img=8', size: 70, top: 400, left: 110 },
  { id: '9', image: 'https://i.pravatar.cc/70?img=9', size: 60, top: 410, left: 310 },
  { id: '10', image: 'https://i.pravatar.cc/85?img=10', size: 80, top:260, left: 170 },
  { id: '11', image: 'https://i.pravatar.cc/85?img=10', size: 60, top:350, left: 180 },
   { id: '12', image: 'https://i.pravatar.cc/85?img=10', size: 50, top:280, left: 330 },
    { id: '13', image: 'https://i.pravatar.cc/85?img=10', size: 50, top:220, left: 20 },
];

const ParticleSpot = ({ size, top, left, opacity }) => (
  <View
    style={[
      styles.particle,
      {
        width: size,
        height: size,
        top,
        left,
        opacity,
      },
    ]}
  />
);

const MusicOnboardingScreen = ({navigation}) => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    top: Math.random() * height,
    left: Math.random() * width,
    opacity: Math.random() * 0.6 + 0.1,
  }));

  const handleContinue = () => {
    // Handle navigation to next screen
    console.log('Continue pressed');
    navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Background Image */}
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Optional overlay for better text readability */}
        <View style={styles.overlay} />

        {/* Particle Effects - Behind everything */}
        {particles.map((particle) => (
          <ParticleSpot
            key={particle.id}
            size={particle.size}
            top={particle.top}
            left={particle.left}
            opacity={particle.opacity}
          />
        ))}

        {/* Artist Profile Images - Above the title with higher z-index */}
        {artistProfiles.map((artist) => (
          <View
            key={artist.id}
            style={[
              styles.artistContainer,
              {
                top: artist.top,
                left: artist.left,
              },
            ]}
          >
            <Image
              source={{ uri: artist.image }}
              style={[
                styles.artistImage,
                {
                  width: artist.size,
                  height: artist.size,
                  borderRadius: artist.size / 2,
                },
              ]}
            />
          </View>
        ))}

        {/* Content - Title positioned after artist images */}
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainTitle}>
              Ready to groove on?
            </Text>
            <Text style={styles.subtitle}>
              Emmerse yourself into the{'\n'}world of music today
            </Text>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={handleContinue}
          >
            <LinearGradient
              colors={['#9C27B0', '#E91E63']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Continue
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  particle: {
    position: 'absolute',
    backgroundColor: '#000000',
    borderRadius: 50,
    zIndex: 2,
  },
  artistContainer: {
    position: 'absolute',
    zIndex: 10, // High z-index to appear above everything else
  },
  artistImage: {
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 80,
    paddingHorizontal: 32,
    zIndex: 5, // Lower than artist images but higher than particles
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 44,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    zIndex: 6,
  },
  subtitle: {
    color: '#E8E8E8',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    zIndex: 6,
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginBottom: 32,
    zIndex: 6,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#9C27B0',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default MusicOnboardingScreen;
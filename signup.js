import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientBackground from '@/components/GradientBackground';

const genres = [
  'HIP HOP',
  'AFRO BEAT',
  'POP',
  'JAZZ',
  'COUNTRY',
  'ROCK',
  'GOSPEL',
  'HIP LIFE',
];

export default function SignUpScreen() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleContinue = () => {
    router.push('/genre-selection');
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>CHOOSE YOUR FAVOURITE GENRE</Text>
          
          <View style={styles.genreContainer}>
            {genres.map((genre, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.genreButton,
                  selectedGenres.includes(genre) && styles.selectedGenre
                ]}
                onPress={() => toggleGenre(genre)}
              >
                <Text style={[
                  styles.genreText,
                  selectedGenres.includes(genre) && styles.selectedGenreText
                ]}>
                  {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
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
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 60,
    letterSpacing: 1,
    lineHeight: 32,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 80,
  },
  genreButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 15,
    width: '48%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedGenre: {
    backgroundColor: 'rgba(233, 30, 99, 0.6)',
    borderColor: '#E91E63',
  },
  genreText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
  selectedGenreText: {
    color: 'white',
  },
  continueButton: {
    backgroundColor: '#E91E63',
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
});

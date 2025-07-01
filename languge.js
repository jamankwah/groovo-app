import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const allLanguages = [
  'English',
  'Hindi',
  'Arabic',
  'French',
  'Mandarin Chinese',
  'Spanish',
  'Bengali',
];

export default function LanguageScreen() {
  const [selectedLanguages, setSelectedLanguages] = useState(['English', 'Hindi']);

  const toggleLanguage = (language) => {
    setSelectedLanguages(prev =>
      prev.includes(language)
        ? prev.filter(lang => lang !== language)
        : [...prev, language]
    );
  };

  const renderLanguageItem = ({ item }) => {
    const isSelected = selectedLanguages.includes(item);
    return (
      <TouchableOpacity
        style={[styles.languageButton, isSelected && styles.selectedButton]}
        onPress={() => toggleLanguage(item)}
      >
        {isSelected && (
          <Ionicons
            name="checkmark"
            size={20}
            color="#C77DFF"
            style={styles.checkmark}
          />
        )}
        <Text style={[styles.languageText, isSelected && styles.selectedText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select Language(s)</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={allLanguages}
        renderItem={renderLanguageItem}
        keyExtractor={item => item}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.doneButton} onPress={() => router.back()}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#DDA0DD',
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  languageButton: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#282828',
    flexDirection: 'row',
  },
  selectedButton: {
    backgroundColor: '#3e3e3e',
    borderColor: '#C77DFF',
    borderWidth: 1,
  },
  checkmark: {
    marginRight: 8,
  },
  languageText: {
    color: 'white',
    fontSize: 16,
  },
  selectedText: {
    color: '#C77DFF',
    fontWeight: 'bold',
  },
  doneButton: {
    backgroundColor: '#8257E5',
    padding: 20,
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
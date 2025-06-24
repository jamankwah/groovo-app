import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [selectedLanguages, setSelectedLanguages] = useState(['English', 'Hindi']);

  const languages = [
    { name: 'English', selected: true },
    { name: 'Hindi', selected: true },
    { name: 'Arabic', selected: false, color: '#9b59b6' },
    { name: 'French', selected: false, color: '#ff1493' }, // Hot pink/magenta
    { name: 'Hindi', selected: false, color: '#9b59b6' },
    { name: 'Mandarian Chinese', selected: false, color: '#666666' },
    { name: 'Spanish', selected: false, color: '#ff1493' }, // Hot pink/magenta
    { name: 'Bengali', selected: false, color: '#666666' },
  ];

  const toggleLanguage = (languageName) => {
    if (selectedLanguages.includes(languageName)) {
      setSelectedLanguages(selectedLanguages.filter(lang => lang !== languageName));
    } else {
      setSelectedLanguages([...selectedLanguages, languageName]);
    }
  };

  const isSelected = (languageName) => {
    return selectedLanguages.includes(languageName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Language(s)</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.selectedSection}>
          {languages.slice(0, 2).map((language, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.selectedCard,
                !isSelected(language.name) && styles.unselectedCard
              ]}
              onPress={() => toggleLanguage(language.name)}
            >
              {isSelected(language.name) && <Text style={styles.checkmark}>✓</Text>}
              <Text style={[
                styles.selectedLanguageText,
                !isSelected(language.name) && styles.unselectedLanguageText
              ]}>
                {language.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.languageGrid}>
          {languages.slice(2).map((language, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.languageItem,
                isSelected(language.name) && styles.selectedLanguageItem
              ]}
              onPress={() => toggleLanguage(language.name)}
            >
              {isSelected(language.name) && (
                <Text style={styles.gridCheckmark}>✓</Text>
              )}
              <Text style={[
                styles.languageText, 
                { color: language.color }
              ]}>
                {language.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9b59b6',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#9b59b6',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  selectedSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  selectedCard: {
    backgroundColor: '#333333',
    borderRadius: 12,
    padding: 20,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 80,
  },
  unselectedCard: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#333333',
    borderStyle: 'dashed',
  },
  checkmark: {
    color: '#9b59b6',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 15,
  },
  selectedLanguageText: {
    color: '#9b59b6',
    fontSize: 18,
    fontWeight: '600',
  },
  unselectedLanguageText: {
    color: '#666666',
    fontSize: 18,
    fontWeight: '600',
  },
  languageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  languageItem: {
    width: '48%',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
    position: 'relative',
  },
  selectedLanguageItem: {
    backgroundColor: '#333333',
    borderRadius: 12,
  },
  gridCheckmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#9b59b6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  doneButton: {
    backgroundColor: '#666666',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
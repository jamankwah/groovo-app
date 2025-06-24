import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const initialRecentSearches = [
  {
    id: '1',
    title: 'You (feat. Travis Scott)',
    type: 'Song',
    artist: 'Don Toliver',
    image: 'https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d465dd84163236',
  },
  {
    id: '2',
    title: 'Pink Friday 2',
    type: 'Album',
    artist: 'Nicki Minaj',
    image: 'https://i.scdn.co/image/ab67616d0000b273033f9b2120351728514115a3',
  },
  {
    id: '3',
    title: 'Maroon 5',
    type: 'Artist',
    image: 'https://i.scdn.co/image/ab6761610000e5eb8a074900a7bab9595a639739',
  },
  {
    id: '4',
    title: 'IRON BOY',
    type: 'Playlist',
    image: 'https://i.scdn.co/image/ab67706c0000da84f29288a75a73b53c39174547',
  },
];

export default function SearchPopScreen() {
  const [recentSearches, setRecentSearches] = useState(initialRecentSearches);
  const [searchText, setSearchText] = useState('');

  const handleRemoveSearch = (id: string) => {
    setRecentSearches(prev => prev.filter(item => item.id !== id));
  };

  const handleClearHistory = () => {
    setRecentSearches([]);
  };

  const renderSearchItem = ({ item }: { item: (typeof initialRecentSearches)[0] }) => (
    <View style={styles.searchItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>
          {item.type}
          {item.artist && ` • ${item.artist}`}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveSearch(item.id)}>
        <Ionicons name="close" size={24} color="#B3B3B3" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search songs, artist, album or pla..."
          placeholderTextColor="#B3B3B3"
          value={searchText}
          onChangeText={setSearchText}
          autoFocus
        />
      </View>

      <Text style={styles.sectionTitle}>Recent searches</Text>

      <FlatList
        data={recentSearches}
        renderItem={renderSearchItem}
        keyExtractor={item => item.id}
        ListFooterComponent={
          recentSearches.length > 0 ? (
            <TouchableOpacity
              onPress={handleClearHistory}
              style={styles.clearButton}
            >
              <Text style={styles.clearButtonText}>Clear history</Text>
            </TouchableOpacity>
          ) : null
        }
      />
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
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginLeft: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
  },
  itemSubtitle: {
    color: '#B3B3B3',
    fontSize: 14,
    marginTop: 4,
  },
  clearButton: {
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
  clearButtonText: {
    color: '#DDA0DD',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

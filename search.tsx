import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const trendingArtists = [
  {
    id: '1',
    name: 'Childish Gambino',
    image: 'https://i.scdn.co/image/ab6761610000e5eb6344498097a9a356b27b4b4e',
  },
  {
    id: '2',
    name: 'Marvin Gaye',
    image: 'https://i.scdn.co/image/ab6761610000e5eb6ea3e53a5796294b4136940d',
  },
  {
    id: '3',
    name: 'Kanye West',
    image: 'https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca',
  },
  {
    id: '4',
    name: 'Justin Bieber',
    image: 'https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36',
  },
  {
    id: '5',
    name: 'Coldplay',
    image: 'https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3',
  },
];

const genres = [
  {
    id: '1',
    name: 'TAMIL',
    image: 'https://i.scdn.co/image/ab67706f00000002b80f86290d84f934277b212f',
  },
  {
    id: '2',
    name: 'INTERNATIONAL',
    image: 'https://i.scdn.co/image/ab67706f0000000213a53272421c60a84b55c3c3',
  },
  {
    id: '3',
    name: 'POP',
    image: 'https://i.scdn.co/image/ab67706f00000002b8b0c8d1d8a39d2c5d3d4e3e',
  },
  {
    id: '4',
    name: 'HIP-HOP',
    image: 'https://i.scdn.co/image/ab67706f0000000219699e4f1692e22649d0ea15',
  },
  {
    id: '5',
    name: 'DANCE',
    image: 'https://i.scdn.co/image/ab67706f00000002e333857e4e09f6e61b17a7a1',
  },
  {
    id: '6',
    name: 'COUNTRY',
    image: 'https://i.scdn.co/image/ab67706f000000026b2b53580e0c6553252a16d7',
  },
  {
    id: '7',
    name: 'INDIE',
    image: 'https://i.scdn.co/image/ab67706f00000002a23c31a7452e8d356c547781',
  },
  {
    id: '8',
    name: 'JAZZ',
    image: 'https://i.scdn.co/image/ab67706f00000002231f2f81144a03b6d9e4a3b7',
  },
  {
    id: '9',
    name: 'PUNK',
    image: 'https://i.scdn.co/image/ab67706f000000028a3f7f8f9f8c9c9b1c7c9c9b',
  },
  {
    id: '10',
    name: 'R&B',
    image: 'https://i.scdn.co/image/ab67706f00000002a99a7f5a8e1b4c9b1c7c9c9b',
  },
];

const { width } = Dimensions.get('window');
const genreCardWidth = (width - 60) / 2;

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => router.push('/screens/searchpop')}
      >
        <Ionicons
          name="search"
          size={20}
          color="white"
          style={styles.searchIcon}
        />
        <Text style={styles.searchInput}>Search songs, artist, album o...</Text>
      </TouchableOpacity>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <FontAwesome name="line-chart" size={20} color="white" />
          <Text style={styles.sectionTitle}>Trending artists</Text>
        </View>
        <FlatList
          data={trendingArtists}
          renderItem={({ item }) => (
            <View style={styles.artistContainer}>
              <Image source={{ uri: item.image }} style={styles.artistImage} />
              <Text style={styles.artistName}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.browseTitle}>Browse</Text>
        <FlatList
          data={genres}
          renderItem={({ item }) => (
            <View style={styles.genreCard}>
              <Image source={{ uri: item.image }} style={styles.genreImage} />
              <View style={styles.genreTextContainer}>
                <Text style={styles.genreText}>{item.name}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    paddingTop: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#A0A0A0',
    height: 40,
    fontSize: 16,
    textAlignVertical: 'center',
    lineHeight: 40,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  browseTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  artistContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  artistName: {
    color: 'white',
    textAlign: 'center',
    width: 80,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  genreCard: {
    width: genreCardWidth,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },
  genreImage: {
    width: '100%',
    height: '100%',
  },
  genreTextContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
}); 
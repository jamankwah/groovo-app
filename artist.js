import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const popularReleases = [
  {
    id: '1',
    title: 'Misery',
    album: 'Maroon 5 - Misery',
    image: 'https://i.scdn.co/image/ab67616d0000b273b1b1b1b1b1b1b1b1b1b1b1b1',
  },
  {
    id: '2',
    title: 'Payphone',
    album: 'Maroon 5 - Overexposed',
    image: 'https://i.scdn.co/image/ab67616d0000b273b2b2b2b2b2b2b2b2b2b2b2b2',
  },
  {
    id: '3',
    title: 'Animals',
    album: 'Maroon 5 - V',
    image: 'https://i.scdn.co/image/ab67616d0000b273c3c3c3c3c3c3c3c3c3c3c3c3',
  },
  {
    id: '4',
    title: 'Sugar',
    album: 'Maroon 5 - Singles',
    image: 'https://i.scdn.co/image/ab67616d0000b273d4d4d4d4d4d4d4d4d4d4d4d4',
  },
  {
    id: '5',
    title: 'The Sun',
    album: 'Songs About Jane',
    image: 'https://i.scdn.co/image/ab67616d0000b273e5e5e5e5e5e5e5e5e5e5e5e5',
  },
  {
    id: '6',
    title: 'What Lovers Do',
    album: 'Red Pill Blues Deluxe',
    image: 'https://i.scdn.co/image/ab67616d0000b273f6f6f6f6f6f6f6f6f6f6f6f6',
  },
];

const artistPlaylists = [
  {
    id: '1',
    title: 'Maroon 5: Best of the best',
    image: 'https://i.scdn.co/image/ab67706f000000026392023b6103cec24354a20a',
  },
  {
    id: '2',
    title: 'This is Maroon 5',
    image: 'https://i.scdn.co/image/ab67706f00000002c9145d2258835848c1561da7',
  },
];

const similarArtists = [
  {
    id: '1',
    name: 'One Republic',
    image: 'https://i.scdn.co/image/ab6761610000e5ebf8593089203673c7f55ad1c4',
  },
  {
    id: '2',
    name: 'Coldplay',
    image: 'https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3',
  },
  {
    id: '3',
    name: 'The Chainsm...',
    image: 'https://i.scdn.co/image/ab6761610000e5eb6a0416943833d792e624b0a4',
  },
  {
    id: '4',
    name: 'Shawn Mendes',
    image: 'https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36',
  },
];

export default function ArtistScreen() {
  const renderHeader = () => (
    <>
      <ImageBackground
        source={{
          uri: 'https://i.scdn.co/image/ab6761610000e5ebae33a01127814a9c65a8a4b3',
        }}
        style={styles.headerImage}
      >
        <View style={styles.headerOverlay}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.artistInfo}>
            <Text style={styles.artistName}>MAROON 5</Text>
            <Text style={styles.artistTag}>Artist</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.listeners}>2.3 L monthly listeners</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="share-2" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.popularHeader}>
        <Text style={styles.popularTitle}>Popular releases</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderFooter = () => (
    <View style={{ paddingBottom: 40 }}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Artist Playlists</Text>
        <FlatList
          data={artistPlaylists}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.playlistCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.playlistImage}
              />
              <Text style={styles.playlistTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Similar artists</Text>
        <FlatList
          data={similarArtists}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.similarArtistCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.similarArtistImage}
              />
              <Text style={styles.similarArtistName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={popularReleases}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.songItem}>
            <Image source={{ uri: item.image }} style={styles.songImage} />
            <View style={styles.songDetails}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songAlbum}>{item.album}</Text>
            </View>
            <TouchableOpacity>
              <Feather name="more-vertical" size={24} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerImage: {
    height: 300,
    justifyContent: 'space-between',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
  },
  artistInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  artistName: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  artistTag: {
    color: 'white',
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  listeners: {
    color: '#B3B3B3',
    fontSize: 16,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  followButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  iconButton: {
    marginLeft: -120,
  },
  playButton: {
    backgroundColor: '#E0E0E0',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  popularTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeMore: {
    color: '#B3B3B3',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  songImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    color: 'white',
    fontSize: 16,
  },
  songAlbum: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  sectionContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  playlistCard: {
    width: 150,
    marginRight: 15,
  },
  playlistImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  playlistTitle: {
    color: '#B3B3B3',
    marginTop: 8,
    height: 40,
  },
  similarArtistCard: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
  },
  similarArtistImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  similarArtistName: {
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
  },
});
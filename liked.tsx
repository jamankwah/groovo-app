import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const likedSongs = [
  {
    id: '1',
    title: 'Inside Out',
    artist: 'The Chainsmokers, Charlee',
    image: 'https://i.scdn.co/image/ab67616d0000b273e6f6a2d4f1e9d6d2e3c5b6c5',
    downloaded: true,
  },
  {
    id: '2',
    title: 'Young',
    artist: 'The Chainsmokers',
    image: 'https://i.scdn.co/image/ab67616d0000b273a76b1e5f5f7f8f7f6c6d6e7e',
    downloaded: false,
  },
  {
    id: '3',
    title: 'Beach House',
    artist: 'The Chainsmokers - Sick',
    image: 'https://i.scdn.co/image/ab67616d0000b273b1d9a3b5a2b2b2b2b2b2b2b2',
    downloaded: true,
  },
  {
    id: '4',
    title: 'Kills You Slowly',
    artist: 'The Chainsmokers - World',
    image: 'https://i.scdn.co/image/ab67616d0000b273e1b1b1b1b1b1b1b1b1b1b1b1',
    downloaded: true,
  },
  {
    id: '5',
    title: 'Setting Fires',
    artist: 'The Chainsmokers, XYLO -',
    image: 'https://i.scdn.co/image/ab67616d0000b273d4d4d4d4d4d4d4d4d4d4d4d4',
    downloaded: false,
  },
  {
    id: '6',
    title: 'Somebody',
    artist: 'The Chainsmokers, Drew',
    image: 'https://i.scdn.co/image/ab67616d0000b273f6f6f6f6f6f6f6f6f6f6f6f6',
    downloaded: false,
  },
  {
    id: '7',
    title: 'Thunder',
    artist: 'Imagine Dragons - Summer',
    image: 'https://i.scdn.co/image/ab67616d0000b273c3c3c3c3c3c3c3c3c3c3c3c3',
    downloaded: false,
  },
  {
    id: '8',
    title: 'High On Life',
    artist: 'Martin Garrix, Bonn - High On',
    image: 'https://i.scdn.co/image/ab67616d0000b273a1e1e1e1e1e1e1e1e1e1e1e1',
    downloaded: false,
  },
  {
    id: '9',
    title: 'FRIENDS',
    artist: 'Marshmello, Anne-Marie',
    image: 'https://i.scdn.co/image/ab67616d0000b273b2b2b2b2b2b2b2b2b2b2b2b2',
    downloaded: false,
  },
  {
    id: '10',
    title: 'Carry On',
    artist: 'Kygo, Rita Ora - Detective Pikachu',
    image: 'https://i.scdn.co/image/ab67616d0000b273bba739883c8a984ab91931a2',
    downloaded: false,
  },
  {
    id: '11',
    title: 'Bet My Heart',
    artist: 'Maroon 5 - Red Pill Blue Deluxe',
    image: 'https://i.scdn.co/image/ab67616d0000b27324853d613919e623f7ce0839',
    downloaded: false,
  },
  {
    id: '12',
    title: 'Misery',
    artist: 'Maroon 5 - Misery',
    image: 'https://i.scdn.co/image/ab67616d0000b273e970172e276495b106f34e63',
    downloaded: true,
  },
  {
    id: '13',
    title: 'Plastic Rose',
    artist: 'Maroon 5 - Red Pill Blue Deluxe',
    image: 'https://i.scdn.co/image/ab67616d0000b27324853d613919e623f7ce0839',
    downloaded: false,
  },
  {
    id: '14',
    title: 'Shoot Love',
    artist: 'Maroon 5 - V Asia Tour Edition',
    image: 'https://i.scdn.co/image/ab67616d0000b273523525164893708e06875799',
    downloaded: false,
  },
  {
    id: '15',
    title: 'Lost Stars',
    artist: 'Maroon 5 - V Asia Tour Edition',
    image: 'https://i.scdn.co/image/ab67616d0000b273523525164893708e06875799',
    downloaded: true,
  },
  {
    id: '16',
    title: 'Wake Up Call',
    artist: "Maroon 5 - It Won't Be Soon Before Long",
    image: 'https://i.scdn.co/image/ab67616d0000b273199c8984532e18507851a700',
    downloaded: false,
  },
];

export default function LikedSongsScreen() {
  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Liked Songs</Text>
      </View>

      <Text style={styles.songCount}>120 liked songs</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Ionicons
            name="search"
            size={20}
            color="#B3B3B3"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#B3B3B3"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity>
          <Ionicons name="swap-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={likedSongs}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.songItem}>
            <Image source={{ uri: item.image }} style={styles.songImage} />
            <View style={styles.songDetails}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist}</Text>
            </View>
            <View style={styles.songActions}>
              <TouchableOpacity>
                <Ionicons
                  name={
                    item.downloaded
                      ? 'checkmark-circle-outline'
                      : 'arrow-down-circle-outline'
                  }
                  size={24}
                  color={item.downloaded ? '#ccc' : '#ccc'}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="more-vertical" size={24} color="#ccc" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
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
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  songCount: {
    color: '#B3B3B3',
    fontSize: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'black',
    height: 40,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    color: '#DDA0DD',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  songActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});

import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { ComponentProps } from 'react';
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

type IoniconName = ComponentProps<typeof Ionicons>['name'];

const libraryItems: {
  id: string;
  title: string;
  count: string;
  icon: IoniconName;
  color: string;
}[] = [
  {
    id: '1',
    title: 'Liked Songs',
    count: '120 songs',
    icon: 'heart-outline',
    color: '#FF6B6B',
  },
  {
    id: '2',
    title: 'Downloads',
    count: '210 songs',
    icon: 'download-outline',
    color: '#6BFFB8',
  },
  {
    id: '3',
    title: 'Playlists',
    count: '12 playlists',
    icon: 'list-outline',
    color: '#6B8BFF',
  },
  {
    id: '4',
    title: 'Artists',
    count: '9 artists',
    icon: 'people-outline',
    color: '#FFD16B',
  },
];

const recentlyPlayed = [
  {
    id: '1',
    title: 'Inside Out',
    artist: 'The Chainsmokers, Charlee',
    image: 'https://i.scdn.co/image/ab67616d0000b273e6f6a2d4f1e9d6d2e3c5b6c5',
  },
  {
    id: '2',
    title: 'Young',
    artist: 'The Chainsmokers',
    image: 'https://i.scdn.co/image/ab67616d0000b273a76b1e5f5f7f8f7f6c6d6e7e',
  },
  {
    id: '3',
    title: 'Are You Gone Already',
    artist: 'Nicki Minaj - Pink Friday 2',
    image: 'https://i.scdn.co/image/ab67616d0000b273d2d2d2d2d2d2d2d2d2d2d2d2',
  },
  {
    id: '4',
    title: 'Kills You Slowly',
    artist: 'The Chainsmokers - World',
    image: 'https://i.scdn.co/image/ab67616d0000b273e1b1b1b1b1b1b1b1b1b1b1b1',
  },
  {
    id: '5',
    title: 'Pick up the phone',
    artist: 'Travis Scott',
    image: 'https://i.scdn.co/image/ab67616d0000b273b5b5b5b5b5b5b5b5b5b5b5b5',
  },
];

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2;

export default function LibraryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Library</Text>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {libraryItems.map(item => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card}
            onPress={() => {
              if (item.title === 'Liked Songs') {
                router.push('/screens/liked');
              } else if (item.title === 'Artists') {
                router.push('/screens/artist');
              }
            }}
          >
            <Ionicons name={item.icon} size={28} color="white" />
            <Text style={[styles.cardTitle, { color: item.color }]}>
              {item.title}
            </Text>
            <Text style={styles.cardCount}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recently Played</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={recentlyPlayed}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.songItem}>
            <Image source={{ uri: item.image }} style={styles.songImage} />
            <View style={styles.songDetails}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist}</Text>
            </View>
            <TouchableOpacity>
              <Feather name="more-vertical" size={24} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
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
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    width: cardWidth,
    height: 120,
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardCount: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
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
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  songImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 5,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    color: 'white',
    fontSize: 16,
  },
  songArtist: {
    color: '#B3B3B3',
    fontSize: 14,
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { mockSongs } from '../data/mockData';

interface SongsScreenProps {
  navigation: any;
}

export function SongsScreen({ navigation }: SongsScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Liked Songs</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.songsContainer}>
          {mockSongs.map((song) => (
            <TouchableOpacity key={song.id} style={styles.songCard}>
              <Image source={{ uri: song.image }} style={styles.songImage} />
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
              </View>
              <View style={styles.songActions}>
                {song.isLiked && (
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.heartIcon}></Text>
                  </TouchableOpacity>
                )}
                {song.isDownloaded && (
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.downloadIcon}></Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.moreButton}>
                  <Text style={styles.moreIcon}>⋮</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  backButton: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  placeholder: {
    width: 24,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  songsContainer: {
    paddingVertical: 16,
  },
  songCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  songArtist: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  songActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 4,
    marginRight: 8,
  },
  heartIcon: {
    fontSize: 16,
  },
  downloadIcon: {
    fontSize: 16,
  },
  moreButton: {
    padding: 8,
  },
  moreIcon: {
    fontSize: 20,
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
});
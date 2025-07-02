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
import { mockPlaylists } from '../data/mockData';

interface PlaylistsScreenProps {
  navigation: any;
}

export function PlaylistsScreen({ navigation }: PlaylistsScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Playlists</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.playlistsContainer}>
          {mockPlaylists.map((playlist) => (
            <TouchableOpacity key={playlist.id} style={styles.playlistCard}>
              <Image source={{ uri: playlist.image }} style={styles.playlistImage} />
              <View style={styles.playlistInfo}>
                <Text style={styles.playlistTitle}>{playlist.title}</Text>
                <Text style={styles.playlistSubtitle}>{playlist.subtitle}</Text>
              </View>
              <TouchableOpacity style={styles.moreButton}>
                <Text style={styles.moreIcon}>⋮</Text>
              </TouchableOpacity>
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
  playlistsContainer: {
    paddingVertical: 16,
  },
  playlistCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  playlistImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  playlistSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
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
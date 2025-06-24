import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, Switch, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

const QueueItem = ({ 
  id,
  title, 
  artist, 
  image, 
  isDownloaded, 
  isPlaying, 
  onDownload, 
  onMenu, 
  onPlay 
}) => (
  <View style={styles.queueItem}>
    <TouchableOpacity onPress={() => Alert.alert('Drag to Reorder', 'Hold and drag to reorder songs')}>
      <Feather name="menu" size={24} color="#666" />
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => onPlay(id)}>
      <Image source={{ uri: image }} style={styles.albumCover} />
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.songInfo} onPress={() => onPlay(id)}>
      <Text style={[styles.songTitle, isPlaying && styles.playingText]}>{title}</Text>
      <Text style={styles.artistName}>{artist}</Text>
    </TouchableOpacity>
    
    <View style={styles.icons}>
      {isPlaying && (
        <TouchableOpacity onPress={() => onPlay(id)}>
          <Feather name="bar-chart-2" size={24} color="#8e44ad" />
        </TouchableOpacity>
      )}
      
      <TouchableOpacity onPress={() => onDownload(id)}>
        {isDownloaded ? (
          <Feather name="check-circle" size={24} color="#27ae60" />
        ) : (
          <Feather name="download" size={24} color="#666" />
        )}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => onMenu(id, title, isDownloaded)}>
        <Feather name="more-vertical" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  </View>
);

const AutoRecommendation = ({ id, title, artist, image, onAdd, onMenu }) => (
  <View style={styles.recommendationItem}>
    <TouchableOpacity onPress={() => onAdd(id)}>
      <Image source={{ uri: image }} style={styles.albumCover} />
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.songInfo} onPress={() => onAdd(id)}>
      <Text style={styles.songTitle}>{title}</Text>
      <Text style={styles.artistName}>{artist}</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => onMenu(id, title, false)}>
      <Feather name="more-vertical" size={24} color="#666" />
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(1);
  const [autoRecommendationsEnabled, setAutoRecommendationsEnabled] = useState(true);
  
  const [queueItems, setQueueItems] = useState([
    {
      id: 1,
      title: "Inside Out",
      artist: "The Chainsmokers, Char...",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-4-1.png",
      isDownloaded: true // First song - downloaded
    },
    {
      id: 2,
      title: "Young",
      artist: "The Chainsmokers",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-5.png",
      isDownloaded: false // Not downloaded - user can click to download
    },
    {
      id: 3,
      title: "Beach House",
      artist: "The Chainsmokers - Sick",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-6.png",
      isDownloaded: false // Not downloaded - user can click to download
    },
    {
      id: 4,
      title: "Kills You Slowly",
      artist: "The Chainsmokers -",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-7.png",
      isDownloaded: false // Not downloaded - user can click to download
    },
    {
      id: 5,
      title: "Setting Fires",
      artist: "The Chainsmokers, XYLO -",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-8.png",
      isDownloaded: false // Not downloaded - user can click to download
    },
    {
      id: 6,
      title: "Somebody",
      artist: "The Chainsmokers, Drew",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-9.png",
      isDownloaded: false // Not downloaded - user can click to download
    },
    {
      id: 7,
      title: "New York City",
      artist: "The Chainsmokers -",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-10.png",
      isDownloaded: true // Last song - downloaded
    }
  ]);

  const [recommendations] = useState([
    {
      id: 8,
      title: "Thunder",
      artist: "Imagine Dragons - Summer",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-14.png"
    },
    {
      id: 9,
      title: "High On Life",
      artist: "Martin Garrix, Bonn - High On",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-12.png"
    },
    {
      id: 10,
      title: "FRIENDS",
      artist: "Marshmello, Anne-Marie",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-13.png"
    },
    {
      id: 11,
      title: "Carry On",
      artist: "Kygo, Rita Ora - Detective Pikachu",
      image: "https://c.animaapp.com/mc6m5va3q4iCCq/img/image-15.png"
    }
  ]);

  const handleMinimizePlayer = () => {
    Alert.alert('Minimize Player', 'Player minimized to bottom of screen');
  };

  const handlePlay = (songId) => {
    setCurrentlyPlaying(songId);
    const song = queueItems.find(item => item.id === songId);
    Alert.alert('Now Playing', `Playing: ${song?.title}`);
  };

  const handleDownload = (songId) => {
    const song = queueItems.find(item => item.id === songId);
    
    if (song?.isDownloaded) {
      // If already downloaded, remove download
      setQueueItems(prevItems =>
        prevItems.map(item =>
          item.id === songId
            ? { ...item, isDownloaded: false }
            : item
        )
      );
      Alert.alert('Download Removed', `${song.title} removed from downloads`);
    } else {
      // If not downloaded, start download
      Alert.alert('Downloading...', `Starting download for ${song?.title}`);
      
      // Simulate download process
      setTimeout(() => {
        setQueueItems(prevItems =>
          prevItems.map(item =>
            item.id === songId
              ? { ...item, isDownloaded: true }
              : item
          )
        );
        Alert.alert('Download Complete', `${song?.title} downloaded successfully!`);
      }, 2000); // 2 second delay to simulate download
    }
  };

  const handleDeleteDownload = (songId) => {
    const song = queueItems.find(item => item.id === songId);
    
    Alert.alert(
      'Delete Download',
      `Are you sure you want to delete the downloaded file for "${song?.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            setQueueItems(prevItems =>
              prevItems.map(item =>
                item.id === songId
                  ? { ...item, isDownloaded: false }
                  : item
              )
            );
            Alert.alert('Download Deleted', `${song?.title} download has been deleted to free up storage space`);
          }
        }
      ]
    );
  };

  const handleQueueMenu = (songId, songTitle, isDownloaded) => {
    const menuOptions = [
      { text: 'Add to Playlist', onPress: () => Alert.alert('Added to Playlist') },
      { text: 'Share', onPress: () => Alert.alert('Sharing song...') },
    ];

    // Add "Delete Download" option only if the song is downloaded
    if (isDownloaded) {
      menuOptions.push({
        text: 'Delete Download',
        onPress: () => handleDeleteDownload(songId),
        style: 'destructive'
      });
    }

    menuOptions.push(
      { text: 'Remove from Queue', onPress: () => removeFromQueue(songId) },
      { text: 'Cancel', style: 'cancel' }
    );

    Alert.alert(
      'Song Options',
      `Options for: ${songTitle}`,
      menuOptions
    );
  };

  const handleRecommendationMenu = (songId, songTitle, isDownloaded) => {
    Alert.alert(
      'Song Options',
      `Options for: ${songTitle}`,
      [
        { text: 'Add to Playlist', onPress: () => Alert.alert('Added to Playlist') },
        { text: 'Share', onPress: () => Alert.alert('Sharing song...') },
        { text: 'Not Interested', onPress: () => Alert.alert('Marked as not interested') },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  const addToQueue = (songId) => {
    const recommendation = recommendations.find(item => item.id === songId);
    if (recommendation) {
      const newQueueItem = {
        ...recommendation,
        isDownloaded: false // New songs added to queue are not downloaded by default
      };
      setQueueItems(prevItems => [...prevItems, newQueueItem]);
      Alert.alert('Added to Queue', `${recommendation.title} added to queue`);
    }
  };

  const removeFromQueue = (songId) => {
    setQueueItems(prevItems => prevItems.filter(item => item.id !== songId));
    Alert.alert('Removed', 'Song removed from queue');
  };

  const getCurrentlyPlayingSong = () => {
    return queueItems.find(item => item.id === currentlyPlaying);
  };

  const currentSong = getCurrentlyPlayingSong();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card style={styles.nowPlayingCard}>
          <TouchableOpacity onPress={handleMinimizePlayer}>
            <Feather name="chevron-down" size={24} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.nowPlayingInfo} onPress={() => Alert.alert('Open Player', 'Opening full player...')}>
            <Text style={styles.nowPlayingText}>Now Playing:</Text>
            <Text style={styles.nowPlayingSong}>
              "{currentSong?.title || 'No song selected'}" - {currentSong?.artist || 'Unknown Artist'}
            </Text>
          </TouchableOpacity>
        </Card>

        <Text style={styles.sectionTitle}>In Queue</Text>

        {queueItems.map((item) => (
          <QueueItem
            key={item.id}
            id={item.id}
            title={item.title}
            artist={item.artist}
            image={item.image}
            isPlaying={item.id === currentlyPlaying}
            isDownloaded={item.isDownloaded}
            onDownload={handleDownload}
            onMenu={handleQueueMenu}
            onPlay={handlePlay}
          />
        ))}

        <View style={styles.autoRecommendationsHeader}>
          <Text style={styles.sectionTitle}>Auto-recommendations</Text>
          <Switch 
            value={autoRecommendationsEnabled} 
            onValueChange={(value) => {
              setAutoRecommendationsEnabled(value);
              Alert.alert(
                'Auto-recommendations', 
                `Auto-recommendations ${value ? 'enabled' : 'disabled'}`
              );
            }}
            trackColor={{ false: '#4a4a4a', true: '#6a6a6a' }}
            thumbColor={autoRecommendationsEnabled ? '#d3d3d3' : '#8a8a8a'}
            ios_backgroundColor="#4a4a4a"
          />
        </View>

        {autoRecommendationsEnabled && recommendations.map((item) => (
          <AutoRecommendation
            key={item.id}
            id={item.id}
            title={item.title}
            artist={item.artist}
            image={item.image}
            onAdd={addToQueue}
            onMenu={handleRecommendationMenu}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  nowPlayingCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
  },
  nowPlayingInfo: {
    marginLeft: 16,
    flex: 1,
  },
  nowPlayingText: {
    color: '#999',
    fontSize: 12,
  },
  nowPlayingSong: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  queueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingLeft: 16,
  },
  albumCover: {
    width: 48,
    height: 48,
    marginLeft: 12,
    marginRight: 16,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: '#dbb9e6',
    fontSize: 16,
  },
  playingText: {
    color: '#8e44ad',
    fontWeight: 'bold',
  },
  artistName: {
    color: '#999',
    fontSize: 14,
  },
  icons: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  autoRecommendationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 24,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingLeft: 16,
  },
});
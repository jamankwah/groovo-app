"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Dimensions, StatusBar } from "react-native"
import {
  ChevronDown,
  MoveVertical as MoreVertical,
  Heart,
  Download,
  Share,
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  ChevronRight,
} from "lucide-react-native"

const { width, height } = Dimensions.get("window")

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(25)
  const [duration, setDuration] = useState(195)
  const [isLiked, setIsLiked] = useState(false)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const progressPercentage = (currentTime / duration) * 100

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <ChevronDown color="#fff" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <MoreVertical color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {/* Album Art */}
      <View style={styles.albumArtContainer}>
        <View style={styles.albumArt}>
          <Image
            source={{
              uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inside%20out-SqaAcOC7IFqWumo69pmOlGUtuDFLSX.jpeg",
            }}
            style={styles.albumImage}
          />
          <View style={styles.overlay}>
            <View style={styles.titleCard}>
              <Text style={styles.songTitle}>INSIDE</Text>
              <Text style={styles.songTitle}>OUT</Text>
              <Text style={styles.artistName}>THE CHAINSMOKERS</Text>
              <Text style={styles.featuredArtist}>FT. CHARLEE</Text>
            </View>
          </View>
          <Text style={styles.lyricText}>Let me see the dark sides as well as the bright</Text>
        </View>
      </View>

      {/* Connect to Device */}
      <View style={styles.connectContainer}>
        <View style={styles.connectButton}>
          <View style={styles.connectIcon}>
            <View style={styles.connectDot} />
            <View style={styles.connectDot} />
          </View>
          <Text style={styles.connectText}>Connect to a device</Text>
        </View>
      </View>

      {/* Song Info */}
      <View style={styles.songInfo}>
        <Text style={styles.currentSongTitle}>Inside Out</Text>
        <Text style={styles.currentArtist}>The Chainsmokers, Cha...</Text>
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Heart color={isLiked ? "#1DB954" : "#666"} size={24} fill={isLiked ? "#1DB954" : "transparent"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Download color="#666" size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Share color="#666" size={24} />
          </TouchableOpacity>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
            <View style={[styles.progressThumb, { left: `${progressPercentage}%` }]} />
          </View>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>

        {/* Playback Controls */}
        <View style={styles.playbackControls}>
          <TouchableOpacity>
            <Shuffle color="#666" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SkipBack color="#fff" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause color="#000" size={32} /> : <Play color="#000" size={32} />}
          </TouchableOpacity>
          <TouchableOpacity>
            <SkipForward color="#fff" size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Repeat color="#666" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Up Next */}
      <View style={styles.upNextContainer}>
        <View style={styles.upNextHeader}>
          <Text style={styles.upNextTitle}>Up Next</Text>
          <TouchableOpacity style={styles.queueButton}>
            <Text style={styles.queueText}>Queue</Text>
            <ChevronRight color="#666" size={16} />
          </TouchableOpacity>
        </View>

        <View style={styles.nextSong}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200",
            }}
            style={styles.nextSongImage}
          />
          <View style={styles.nextSongInfo}>
            <Text style={styles.nextSongTitle}>Young</Text>
            <Text style={styles.nextSongArtist}>The Chainsmokers</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerButton: {
    padding: 8,
  },
  albumArtContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  albumArt: {
    width: width - 80,
    height: width - 80,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  albumImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  titleCard: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
  },
  songTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: 2,
  },
  artistName: {
    fontSize: 14,
    color: "#000",
    marginTop: 10,
    letterSpacing: 1,
  },
  featuredArtist: {
    fontSize: 12,
    color: "#666",
    letterSpacing: 1,
  },
  lyricText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
  connectContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  connectButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  connectIcon: {
    flexDirection: "row",
    marginRight: 8,
  },
  connectDot: {
    width: 4,
    height: 4,
    backgroundColor: "#fff",
    borderRadius: 2,
    marginHorizontal: 1,
  },
  connectText: {
    color: "#fff",
    fontSize: 14,
  },
  songInfo: {
    marginBottom: 30,
  },
  currentSongTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  currentArtist: {
    color: "#999",
    fontSize: 16,
  },
  controlsContainer: {
    marginBottom: 30,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  timeText: {
    color: "#999",
    fontSize: 12,
    width: 35,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#333",
    borderRadius: 2,
    marginHorizontal: 15,
    position: "relative",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  progressThumb: {
    position: "absolute",
    top: -4,
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginLeft: -6,
  },
  playbackControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  upNextContainer: {
    flex: 1,
  },
  upNextHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  upNextTitle: {
    color: "#999",
    fontSize: 16,
    fontWeight: "600",
  },
  queueButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  queueText: {
    color: "#666",
    fontSize: 16,
    marginRight: 5,
  },
  nextSong: {
    flexDirection: "row",
    alignItems: "center",
  },
  nextSongImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  nextSongInfo: {
    flex: 1,
  },
  nextSongTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  nextSongArtist: {
    color: "#999",
    fontSize: 14,
  },
})

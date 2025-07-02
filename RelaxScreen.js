import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

// Your custom album covers for the songs
const relaxSongs = [
  {
    id: "1",
    title: "Weightless",
    artist: "Marconi Union",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d8RsbNd1BpToTDWTvVktfVnwG22Uqz.png", // Your second image
  },
  {
    id: "2", 
    title: "Nothing It Can",
    artist: "Helios",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IQir7MvDdEgeKekHHoETmm5sNiXraR.png", // Your first image
  },       
  {
    id: "3",
    title: "Small Memory", 
    artist: "Jon Hopkins - Insides",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ONWsImmEdosDxw43ltnpU07Mp3JrTz.png", // Your fourth image
  },
  {
    id: "4",
    title: "Close To Home",
    artist: "Lyle Mays", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fyK5nMMpIdVfMhnRFTXTrGu2Sskbb3.png", // Your third image
  },
];

const mixesData = [
  {
    id: "1",
    title: "Mix 1",
    artists: "Calvin Harris, Martin Garrix, Dewald Whi...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jodFvwJI9uR2VBxSFQTjStxaFi3O1P.png",
  },
  {
    id: "2",
    title: "Mix 2", 
    artists: "A R Rahman, Harris Jayaraj, Yuvan Sha...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vfg4lnPM7hE2emHWTBRZ1qNmFVw58Z.png",
  },
  {
    id: "3",
    title: "Mix 3",
    artists: "Maroon 5, Imagine Dragons, O...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qRj5ckhc3tvRKITKjJQDAqhDhmWj4O.png",
  },
];

const playlistsData = [
  {
    id: "1",
    title: "GYM PHONK",
    subtitle: "Aggressive Workout", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YTdVSl9NvbFuiikYVJQXUrAlQsMult.png",
  },
  {
    id: "2",
    title: "SIGMA MALE",
    subtitle: "TIKTOK MUSIC",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ddi5joQ7S232GiZbG0aPvgNaAyenGo.png",
  },
  {
    id: "3",
    title: "Phonk",
    subtitle: "Dark Vibes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1rWX59ME5QdvcaQcleeyrZBq2du9Ck.png",
  },
];

const categories = ["For you", "Relax", "Workout", "Travel"];

export function RelaxScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("Relax");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* Header with Greeting */}
        <View style={styles.header}>
          <View style={styles.greetingSection}>
            <Text style={styles.greeting}>👋 Hi Logan,</Text>
            <Text style={styles.timeGreeting}>Good Evening</Text>
          </View>
          <View style={styles.profileSection}>
            <View style={styles.notificationDot} />
            <Image
              source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-emQlFa4X8uCcjKyzvWsH62brBMbLT3.png" }}
              style={styles.profileImage}
            />
          </View>
        </View>

        {/* Category Tabs */}
        <View style={styles.categoryTabs}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.categoryTab, selectedCategory === category && styles.categoryTabActive]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[styles.categoryText, selectedCategory === category && styles.categoryTextActive]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Today's Refreshing Song-{"\n"}Recommendations</Text>

        {/* Featured Playlist Card */}
        <TouchableOpacity style={styles.featuredCard}>
          <Image
            source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-emQlFa4X8uCcjKyzvWsH62brBMbLT3.png" }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredInfo}>
            <Text style={styles.featuredTitle}>Peace</Text>
            <Text style={styles.featuredSubtitle}>22 songs</Text>
          </View>
          <View style={styles.featuredActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.heartIcon}>🤍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.moreIcon}>⋮</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playIcon}>▶️</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Songs List - WITH YOUR CUSTOM COVERS */}
        <View style={styles.songsContainer}>
          {relaxSongs.map((song) => (
            <TouchableOpacity key={song.id} style={styles.songItem}>
              <Image source={{ uri: song.image }} style={styles.songImage} />
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
              </View>
              <TouchableOpacity style={styles.songMoreButton}>
                <Text style={styles.moreIcon}>⋮</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* See All Button */}
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>

        {/* FOR RELAXING Section */}
        <View style={styles.relaxingSection}>
          <Text style={styles.relaxingSectionTitle}>FOR RELAXING</Text>
          <Text style={styles.relaxingSectionSubtitle}>Mixes for you</Text>
        </View>

        {/* Mixes Horizontal Scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.mixesScrollView}
          contentContainerStyle={styles.mixesContainer}
        >
          {mixesData.map((mix) => (
            <TouchableOpacity key={mix.id} style={styles.mixCard}>
              <Image source={{ uri: mix.image }} style={styles.mixImage} />
              <Text style={styles.mixTitle}>{mix.title}</Text>
              <Text style={styles.mixArtists}>{mix.artists}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Playlists Section */}
        <View style={styles.playlistsSection}>
          <View style={styles.playlistsHeader}>
            <Text style={styles.playlistsSectionTitle}>Playlists</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>See more</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Playlists Horizontal Scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.playlistsScrollView}
          contentContainerStyle={styles.playlistsContainer}
        >
          {playlistsData.map((playlist) => (
            <TouchableOpacity key={playlist.id} style={styles.playlistCard}>
              <Image source={{ uri: playlist.image }} style={styles.playlistImage} />
              <Text style={styles.playlistTitle}>{playlist.title}</Text>
              <Text style={styles.playlistSubtitle}>{playlist.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navIcon}>📚</Text>
          <Text style={styles.navLabel}>Your Library</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollView: {
    flex: 1,
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  greetingSection: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 4,
  },
  timeGreeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  profileSection: {
    position: "relative",
    alignItems: "center",
  },
  notificationDot: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#8B5CF6",
    zIndex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryTabs: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 32,
    gap: 8,
  },
  categoryTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  categoryTabActive: {
    backgroundColor: "#374151",
  },
  categoryText: {
    fontSize: 16,
    color: "#9CA3AF",
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingHorizontal: 24,
    marginBottom: 24,
    lineHeight: 32,
  },
  featuredCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F2937",
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
  },
  featuredImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },
  featuredInfo: {
    flex: 1,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  featuredActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  actionButton: {
    padding: 8,
  },
  heartIcon: {
    fontSize: 20,
  },
  moreIcon: {
    fontSize: 20,
    color: "#9CA3AF",
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "#6B7280",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  playIcon: {
    fontSize: 16,
  },
  songsContainer: {
    paddingHorizontal: 24,
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 8,
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
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  songArtist: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  songMoreButton: {
    padding: 8,
  },
  seeAllButton: {
    backgroundColor: "#6B7280",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    alignSelf: "center",
    marginVertical: 32,
  },
  seeAllText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  relaxingSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  relaxingSectionTitle: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 8,
  },
  relaxingSectionSubtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#8B5CF6",
  },
  mixesScrollView: {
    marginBottom: 32,
  },
  mixesContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  mixCard: {
    width: 140,
    alignItems: "flex-start",
  },
  mixImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 12,
  },
  mixTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  mixArtists: {
    fontSize: 12,
    color: "#9CA3AF",
    lineHeight: 16,
  },
  playlistsSection: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  playlistsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playlistsSectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8B5CF6",
  },
  seeMoreText: {
    fontSize: 16,
    color: "#9CA3AF",
    fontWeight: "500",
  },
  playlistsScrollView: {
    marginBottom: 32,
  },
  playlistsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  playlistCard: {
    width: 140,
    alignItems: "flex-start",
  },
  playlistImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 12,
  },
  playlistTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8B5CF6",
    marginBottom: 4,
    textAlign: "center",
    width: "100%",
  },
  playlistSubtitle: {
    fontSize: 12,
    color: "#9CA3AF",
    textAlign: "center",
    width: "100%",
  },
  bottomSpacing: {
    height: 100,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#000000",
    borderTopWidth: 1,
    borderTopColor: "#1F2937",
    paddingVertical: 12,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  navItemActive: {},
  navIcon: {
    fontSize: 20,
    color: "#9CA3AF",
  },
  navIconActive: {
    fontSize: 20,
    color: "#8B5CF6",
  },
  navLabel: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  navLabelActive: {
    fontSize: 12,
    color: "#8B5CF6",
  },
});
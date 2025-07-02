import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
  SafeAreaView,
} from 'react-native';

// Mock user data
const mockUser = {
  name: "Logan Jimmy",
  email: "jim_logan01@gmail.com",
  phone: "8844662200",
  avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-emQlFa4X8uCcjKyzvWsH62brBMbLT3.png",
  stats: {
    songs: 120,
    playlists: 12,
    artists: 9,
  },
};

const initialLanguages = [
  { code: "en", name: "English", selected: true },
  { code: "hi", name: "Hindi", selected: true },
  { code: "ar", name: "Arabic", selected: false },
  { code: "fr", name: "French", selected: false },
  { code: "zh", name: "Mandarin Chinese", selected: false },
  { code: "es", name: "Spanish", selected: false },
  { code: "bn", name: "Bengali", selected: false },
];

export function ProfileScreen({ navigation }) {
  const [user] = useState(mockUser);
  const [languages, setLanguages] = useState(initialLanguages);
  const [streamingQuality, setStreamingQuality] = useState("hd");
  const [autoPlay, setAutoPlay] = useState(true);
  const [showLyrics, setShowLyrics] = useState(true);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showQualityModal, setShowQualityModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const selectedLanguages = languages.filter((lang) => lang.selected);

  const toggleLanguage = (code) => {
    setLanguages((prev) => prev.map((lang) => (lang.code === code ? { ...lang, selected: !lang.selected } : lang)));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}> Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{user.name}</Text>
        </View>

        {/* Contact Info */}
        <View style={styles.contactSection}>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>{user.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Phone Number</Text>
            <Text style={styles.contactValue}>{user.phone}</Text>
          </View>
        </View>

        {/* Stats - NOW WITH NAVIGATION */}
        <View style={styles.statsSection}>
          <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate("Songs")}>
            <Text style={styles.statIcon}></Text>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>songs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate("Playlists")}>
            <Text style={styles.statIcon}></Text>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate("Artists")}>
            <Text style={styles.statIcon}></Text>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>artists</Text>
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <TouchableOpacity style={styles.settingItem} onPress={() => setShowLanguageModal(true)}>
            <Text style={styles.settingLabel}>Music Language(s)</Text>
            <Text style={styles.settingValue}>{selectedLanguages.map((lang) => lang.name).join(", ")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={() => setShowQualityModal(true)}>
            <Text style={styles.settingLabel}>Streaming Quality</Text>
            <Text style={styles.settingValue}>Auto</Text>
          </TouchableOpacity>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Download Quality</Text>
            <Text style={styles.settingValue}>HD</Text>
          </View>
          <TouchableOpacity style={styles.settingItem}>
            <View>
              <Text style={styles.settingLabel}>Equalizer</Text>
              <Text style={styles.settingSubLabel}>Adjust audio settings</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Auto-Play</Text>
            <Switch
              value={autoPlay}
              onValueChange={setAutoPlay}
              trackColor={{ false: "#767577", true: "#8B5CF6" }}
              thumbColor={autoPlay ? "#FFFFFF" : "#f4f3f4"}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Show Lyrics on Player</Text>
            <Switch
              value={showLyrics}
              onValueChange={setShowLyrics}
              trackColor={{ false: "#767577", true: "#8B5CF6" }}
              thumbColor={showLyrics ? "#FFFFFF" : "#f4f3f4"}
            />
          </View>
          <TouchableOpacity style={styles.settingItem}>
            <View>
              <Text style={styles.settingLabel}>Connect to a Device</Text>
              <Text style={styles.settingSubLabel}>Listen to and control music on your devices</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Others */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Others</Text>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Help & Support</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={() => setShowLogoutModal(true)}>
            <Text style={styles.settingLabel}>Logout</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIconActive}>📚</Text>
          <Text style={styles.navLabelActive}>Your Library</Text>
        </TouchableOpacity>
      </View>

      {/* Language Modal */}
      <Modal visible={showLanguageModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Language(s)</Text>
              <TouchableOpacity onPress={() => setShowLanguageModal(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.languageList}>
              {languages.map((language) => (
                <TouchableOpacity
                  key={language.code}
                  style={[styles.languageItem, language.selected && styles.languageItemSelected]}
                  onPress={() => toggleLanguage(language.code)}
                >
                  <Text style={[styles.languageText, language.selected && styles.languageTextSelected]}>
                    {language.name}
                  </Text>
                  {language.selected && <Text style={styles.checkMark}>✓</Text>}
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.doneButton} onPress={() => setShowLanguageModal(false)}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Quality Modal */}
      <Modal visible={showQualityModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Streaming Quality</Text>
              <TouchableOpacity onPress={() => setShowQualityModal(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.qualityOptions}>
              {[
                { id: "auto", name: "Auto", description: "Based on Network Speed" },
                { id: "hd", name: "HD", description: "320/256 kbps" },
                { id: "high", name: "High", description: "128 kbps" },
                { id: "medium", name: "Medium", description: "64 kbps" },
              ].map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={styles.qualityItem}
                  onPress={() => {
                    setStreamingQuality(option.id);
                  }}
                >
                  <View style={styles.qualityInfo}>
                    <Text style={styles.qualityName}>{option.name}</Text>
                    <Text style={styles.qualityDescription}>{option.description}</Text>
                  </View>
                  <View style={[styles.radioButton, streamingQuality === option.id && styles.radioButtonSelected]}>
                    {streamingQuality === option.id && <View style={styles.radioButtonInner} />}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.doneButton} onPress={() => setShowQualityModal(false)}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Logout Modal */}
      <Modal visible={showLogoutModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.modalText}>Are you sure you want to logout of Groovo?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setShowLogoutModal(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.logoutButton]}
                onPress={() => {
                  console.log("Logging out...");
                  setShowLogoutModal(false);
                }}
              >
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    fontSize: 14,
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
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#D1D5DB",
  },
  editButton: {
    backgroundColor: "#374151",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#4B5563",
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 32,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  contactSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  contactItem: {
    marginBottom: 24,
  },
  contactLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  contactValue: {
    fontSize: 16,
    color: "#9CA3AF",
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: "#1F2937",
    borderColor: "#374151",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    flex: 1,
    alignItems: "center",
  },
  statIcon: {
    fontSize: 20,
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  statLabel: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  settingsSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#D1D5DB",
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  settingSubLabel: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 4,
  },
  settingValue: {
    fontSize: 14,
    color: "#A855F7",
  },
  chevron: {
    fontSize: 20,
    color: "#9CA3AF",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#1F2937",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#A855F7",
  },
  closeButton: {
    fontSize: 24,
    color: "#9CA3AF",
    fontWeight: "bold",
  },
  languageList: {
    maxHeight: 300,
    marginBottom: 24,
  },
  languageItem: {
    backgroundColor: "#374151",
    borderWidth: 2,
    borderColor: "#4B5563",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageItemSelected: {
    borderColor: "white",
    backgroundColor: "#4B5563",
  },
  languageText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  languageTextSelected: {
    color: "#A855F7",
  },
  checkMark: {
    fontSize: 20,
    color: "#A855F7",
    fontWeight: "bold",
  },
  qualityOptions: {
    marginBottom: 32,
  },
  qualityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  qualityInfo: {
    flex: 1,
  },
  qualityName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  qualityDescription: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6B7280",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000000",
  },
  doneButton: {
    backgroundColor: "#4B5563",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  doneButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  modalText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 32,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
  },
  modalButton: {
    flex: 1,
    backgroundColor: "#4B5563",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  logoutButton: {
    backgroundColor: "#DC2626",
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});
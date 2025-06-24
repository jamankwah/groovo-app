import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Modal } from 'react-native';

export default function App() {
  const [showLogoutModal, setShowLogoutModal] = useState(true);

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
    setShowLogoutModal(false);
  };

  const handleClose = () => {
    setShowLogoutModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={showLogoutModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Logout</Text>
              <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Are you sure you want to logout of{'\n'}Groovo?
              </Text>
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#2c2c2c',
    borderRadius: 12,
    width: '90%',
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
  },
  modalTitle: {
    color: '#888',
    fontSize: 20,
    fontWeight: '600',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    color: '#ff4444',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalContent: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  modalText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 24,
  },
  logoutButton: {
    backgroundColor: '#888',
    margin: 20,
    marginTop: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});
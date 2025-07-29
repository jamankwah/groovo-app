package com.groovo.service;

import com.groovo.model.Playlist;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlaylistService {

    private final List<Playlist> playlists = new ArrayList<>();

    public List<Playlist> getPlaylists() {
        return playlists;
    }

    public List<Playlist> getPlaylistByUserId(String userId) {
        return playlists.stream()
                .filter(p -> p.getUserId().equals(userId))
                .toList();
    }

    public Playlist createPlaylist(Playlist playlist) {
        playlists.add(playlist);
        return playlist;
    }

    public Playlist updatePlaylist(String id, Playlist updatedData) {
        for (int i = 0; i < playlists.size(); i++) {
            Playlist p = playlists.get(i);
            if (p.getId().equals(id)) {
                p.setName(updatedData.getName());
                p.setUserId(updatedData.getUserId());
                return p;
            }
        }
        return null;
    }
}

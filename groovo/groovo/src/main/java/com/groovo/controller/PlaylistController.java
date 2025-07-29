package com.groovo.controller;

import com.groovo.model.Playlist;
import com.groovo.service.PlaylistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/playlist")
public class PlaylistController {

    private final PlaylistService service;

    public PlaylistController(PlaylistService service) {
        this.service = service;
    }

    // POST /playlist
    @PostMapping
    public ResponseEntity<?> createPlaylist(@RequestBody Playlist playlist) {
        if (playlist.getId() == null || playlist.getId().isEmpty()) {
            return ResponseEntity.badRequest().body("Playlist id is required");
        }
        return ResponseEntity.status(201).body(service.createPlaylist(playlist));
    }

    // GET /playlist/user/{userId}
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Playlist>> getByUserId(@PathVariable String userId) {
        return ResponseEntity.ok(service.getPlaylistByUserId(userId));
    }

    // PUT /playlist/{id}
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePlaylist(@PathVariable String id, @RequestBody Playlist playlist) {
        Playlist updated = service.updatePlaylist(id, playlist);
        if (updated == null) {
            return ResponseEntity.status(404).body("Playlist not found.");
        }
        return ResponseEntity.ok(updated);
    }
}

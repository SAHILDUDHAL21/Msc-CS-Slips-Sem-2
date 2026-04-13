package com.example.slip13;

import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.widget.MediaController;
import android.widget.Toast;
import android.widget.VideoView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        try {
            VideoView videoView = findViewById(R.id.videoView);
            if (videoView == null) {
                Toast.makeText(this, "VideoView not found", Toast.LENGTH_SHORT).show();
                return;
            }

            // Path to local video in res/raw/sample_video.mp4
            String videoPath = "android.resource://" + getPackageName() + "/" + R.raw.sample_video;
            Uri uri = Uri.parse(videoPath);
            videoView.setVideoURI(uri);

            // Setup MediaController
            MediaController mediaController = new MediaController(this);
            mediaController.setAnchorView(videoView);
            videoView.setMediaController(mediaController);

            // Handle errors during playback
            videoView.setOnErrorListener((mp, what, extra) -> {
                Log.e("VideoView", "Error occurred: " + what + ", " + extra);
                Toast.makeText(MainActivity.this, "Error playing video: " + what, Toast.LENGTH_LONG).show();
                return true; // Return true if error is handled
            });

            // Start video when ready
            videoView.setOnPreparedListener(mp -> {
                videoView.start();
            });

        } catch (Exception e) {
            e.printStackTrace();
            Toast.makeText(this, "Exception: " + e.getMessage(), Toast.LENGTH_LONG).show();
        }
    }
}
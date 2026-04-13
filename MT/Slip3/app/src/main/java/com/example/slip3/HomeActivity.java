package com.example.slip3;

import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        TextView tvWelcome = findViewById(R.id.tvWelcome);

        String username = getIntent().getStringExtra("USERNAME");
        if (username != null) {
            tvWelcome.setText(getString(R.string.welcome_message, username));
        }
    }
}
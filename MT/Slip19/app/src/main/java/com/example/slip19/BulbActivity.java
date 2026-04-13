package com.example.slip19;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.ToggleButton;
import androidx.appcompat.app.AppCompatActivity;

public class BulbActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bulb);

        ImageView ivBulb = findViewById(R.id.iv_bulb);
        ToggleButton toggleBulb = findViewById(R.id.toggle_bulb);

        toggleBulb.setOnCheckedChangeListener((buttonView, isChecked) -> {
            if (isChecked) {
                ivBulb.setImageResource(R.drawable.ic_bulb_on);
            } else {
                ivBulb.setImageResource(R.drawable.ic_bulb_off);
            }
        });
    }
}
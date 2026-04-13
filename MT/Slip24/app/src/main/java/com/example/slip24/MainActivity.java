package com.example.slip24;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    CheckBox cbReading, cbMusic, cbSports, cbCoding;
    Button btnShow, btnGoToQ2;
    TextView tvResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        cbReading = findViewById(R.id.cbReading);
        cbMusic = findViewById(R.id.cbMusic);
        cbSports = findViewById(R.id.cbSports);
        cbCoding = findViewById(R.id.cbCoding);
        btnShow = findViewById(R.id.btnShow);
        btnGoToQ2 = findViewById(R.id.btnGoToQ2);
        tvResult = findViewById(R.id.tvResult);

        btnShow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                StringBuilder result = new StringBuilder("Selected Hobbies: ");
                if (cbReading.isChecked()) result.append("\nReading");
                if (cbMusic.isChecked()) result.append("\nMusic");
                if (cbSports.isChecked()) result.append("\nSports");
                if (cbCoding.isChecked()) result.append("\nCoding");
                
                if (result.toString().equals("Selected Hobbies: ")) {
                    tvResult.setText("No hobbies selected.");
                } else {
                    tvResult.setText(result.toString());
                }
            }
        });

        btnGoToQ2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, PersonalInfoActivity.class);
                startActivity(intent);
            }
        });
    }
}
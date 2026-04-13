package com.example.slip9;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import java.util.Locale;

public class ResultActivity extends AppCompatActivity {

    private double num1, num2;
    private TextView tvResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_result);

        tvResult = findViewById(R.id.tvResult);

        num1 = getIntent().getDoubleExtra("NUM1", 0);
        num2 = getIntent().getDoubleExtra("NUM2", 0);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_options, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.menu_power) {
            double power = Math.pow(num1, num2);
            String result = String.format(Locale.getDefault(), getString(R.string.result_power), num1, num2, power);
            tvResult.setText(result);
            return true;
        } else if (id == R.id.menu_average) {
            double average = (num1 + num2) / 2;
            String result = String.format(Locale.getDefault(), getString(R.string.result_average), average);
            tvResult.setText(result);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}

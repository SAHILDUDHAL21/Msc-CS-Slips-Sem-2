package com.example.slip7;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EditText etFirstName, etMiddleName, etLastName, etDOB, etAddress, etEmail;
    private Button btnSubmit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etFirstName = findViewById(R.id.etFirstName);
        etMiddleName = findViewById(R.id.etMiddleName);
        etLastName = findViewById(R.id.etLastName);
        etDOB = findViewById(R.id.etDOB);
        etAddress = findViewById(R.id.etAddress);
        etEmail = findViewById(R.id.etEmail);
        btnSubmit = findViewById(R.id.btnSubmit);

        btnSubmit.setOnClickListener(v -> {
            String firstName = etFirstName.getText().toString();
            String middleName = etMiddleName.getText().toString();
            String lastName = etLastName.getText().toString();
            String dob = etDOB.getText().toString();
            String address = etAddress.getText().toString();
            String email = etEmail.getText().toString();

            Intent intent = new Intent(MainActivity.this, SecondActivity.class);
            intent.putExtra("FIRST_NAME", firstName);
            intent.putExtra("MIDDLE_NAME", middleName);
            intent.putExtra("LAST_NAME", lastName);
            intent.putExtra("DOB", dob);
            intent.putExtra("ADDRESS", address);
            intent.putExtra("EMAIL", email);
            startActivity(intent);
        });
    }
}

package com.example.slip21;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EditText etFirstName, etMiddleName, etLastName, etSalary, etAddress, etEmail;
    private Button btnSubmit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etFirstName = findViewById(R.id.etFirstName);
        etMiddleName = findViewById(R.id.etMiddleName);
        etLastName = findViewById(R.id.etLastName);
        etSalary = findViewById(R.id.etSalary);
        etAddress = findViewById(R.id.etAddress);
        etEmail = findViewById(R.id.etEmail);
        btnSubmit = findViewById(R.id.btnSubmit);

        btnSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String firstName = etFirstName.getText().toString();
                String middleName = etMiddleName.getText().toString();
                String lastName = etLastName.getText().toString();
                String salary = etSalary.getText().toString();
                String address = etAddress.getText().toString();
                String email = etEmail.getText().toString();

                Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                intent.putExtra("firstName", firstName);
                intent.putExtra("middleName", middleName);
                intent.putExtra("lastName", lastName);
                intent.putExtra("salary", salary);
                intent.putExtra("address", address);
                intent.putExtra("email", email);
                startActivity(intent);
            }
        });
    }
}

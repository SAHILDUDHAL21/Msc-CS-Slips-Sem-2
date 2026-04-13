package com.example.slip21;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {

    private TextView tvDisplay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        tvDisplay = findViewById(R.id.tvDisplay);

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            String firstName = extras.getString("firstName");
            String middleName = extras.getString("middleName");
            String lastName = extras.getString("lastName");
            String salary = extras.getString("salary");
            String address = extras.getString("address");
            String email = extras.getString("email");

            String displayInfo = "Employee Information:\n\n" +
                    "First Name: " + firstName + "\n" +
                    "Middle Name: " + middleName + "\n" +
                    "Last Name: " + lastName + "\n" +
                    "Salary: " + salary + "\n" +
                    "Address: " + address + "\n" +
                    "Email ID: " + email;

            tvDisplay.setText(displayInfo);
        }
    }
}

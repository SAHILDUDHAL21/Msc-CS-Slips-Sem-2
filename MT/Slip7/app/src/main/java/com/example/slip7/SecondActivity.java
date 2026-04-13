package com.example.slip7;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        TextView tvDisplay = findViewById(R.id.tvDisplay);

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            String firstName = extras.getString("FIRST_NAME");
            String middleName = extras.getString("MIDDLE_NAME");
            String lastName = extras.getString("LAST_NAME");
            String dob = extras.getString("DOB");
            String address = extras.getString("ADDRESS");
            String email = extras.getString("EMAIL");

            String displayText = "First Name: " + firstName +
                    "\nMiddle Name: " + middleName +
                    "\nLast Name: " + lastName +
                    "\nDOB: " + dob +
                    "\nAddress: " + address +
                    "\nEmail: " + email;

            tvDisplay.setText(displayText);
        }
    }
}

package com.example.slip6;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {

    private EditText etNum1, etNum2;
    private Button btnCheck;
    private TextView tvDisplay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        etNum1 = findViewById(R.id.etNum1);
        etNum2 = findViewById(R.id.etNum2);
        btnCheck = findViewById(R.id.btnCheck);
        tvDisplay = findViewById(R.id.tvDisplay);

        btnCheck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String val1 = etNum1.getText().toString();
                String val2 = etNum2.getText().toString();

                if (val1.isEmpty() || val2.isEmpty()) {
                    Toast.makeText(SecondActivity.this, "Please enter both numbers", Toast.LENGTH_SHORT).show();
                    return;
                }

                int num1 = Integer.parseInt(val1);
                int num2 = Integer.parseInt(val2);

                if (num1 > 10 && num2 > 10) {
                    // Reject input
                    tvDisplay.setText("");
                    etNum1.setText("");
                    etNum2.setText("");
                    Toast.makeText(SecondActivity.this, "Both numbers are > 10. Please enter two new numbers.", Toast.LENGTH_LONG).show();
                } else {
                    // Accept and display
                    tvDisplay.setText("Numbers entered: " + num1 + " and " + num2);
                }
            }
        });
    }
}

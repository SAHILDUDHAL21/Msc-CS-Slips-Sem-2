package com.example.slip25;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EditText etNumber, etAnswer;
    private RadioGroup rgOperations;
    private Button btnClick;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etNumber = findViewById(R.id.etNumber);
        etAnswer = findViewById(R.id.etAnswer);
        rgOperations = findViewById(R.id.rgOperations);
        btnClick = findViewById(R.id.btnClick);

        btnClick.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String input = etNumber.getText().toString();
                if (input.isEmpty()) {
                    Toast.makeText(MainActivity.this, "Please enter a number", Toast.LENGTH_SHORT).show();
                    return;
                }

                int num;
                try {
                    num = Integer.parseInt(input);
                } catch (NumberFormatException e) {
                    Toast.makeText(MainActivity.this, "Invalid number", Toast.LENGTH_SHORT).show();
                    return;
                }

                int checkedId = rgOperations.getCheckedRadioButtonId();
                if (checkedId == -1) {
                    Toast.makeText(MainActivity.this, "Please select an operation", Toast.LENGTH_SHORT).show();
                    return;
                }

                String result = "";
                if (checkedId == R.id.rbOddEven) {
                    if (num % 2 == 0) {
                        result = "No is Even";
                    } else {
                        result = "No is Odd";
                    }
                } else if (checkedId == R.id.rbPositiveNegative) {
                    if (num > 0) {
                        result = "No is Positive";
                    } else if (num < 0) {
                        result = "No is Negative";
                    } else {
                        result = "No is Zero";
                    }
                } else if (checkedId == R.id.rbSquare) {
                    result = String.valueOf(num * num);
                } else if (checkedId == R.id.rbFactorial) {
                    if (num < 0) {
                        result = "Error: Negative Factorial";
                    } else {
                        result = String.valueOf(calculateFactorial(num));
                    }
                }

                etAnswer.setText(result);
            }
        });
    }

    private long calculateFactorial(int n) {
        if (n == 0) return 1;
        long fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}
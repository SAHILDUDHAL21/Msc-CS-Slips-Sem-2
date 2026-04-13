package com.example.slip22;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EditText editTextEnter, editTextOutput;
    private RadioGroup radioGroup;
    private Button buttonClick;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextEnter = findViewById(R.id.editTextEnter);
        editTextOutput = findViewById(R.id.editTextOutput);
        radioGroup = findViewById(R.id.radioGroup);
        buttonClick = findViewById(R.id.buttonClick);

        buttonClick.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                performStringOperation();
            }
        });
    }

    private void performStringOperation() {
        String input = editTextEnter.getText().toString();
        if (input.isEmpty()) {
            Toast.makeText(this, "Please enter a string", Toast.LENGTH_SHORT).show();
            return;
        }

        int checkedId = radioGroup.getCheckedRadioButtonId();
        if (checkedId == -1) {
            Toast.makeText(this, "Please select an operation", Toast.LENGTH_SHORT).show();
            return;
        }

        String result = "";
        if (checkedId == R.id.radioUppercase) {
            result = input.toUpperCase();
        } else if (checkedId == R.id.radioLowercase) {
            result = input.toLowerCase();
        } else if (checkedId == R.id.radioRight5) {
            if (input.length() >= 5) {
                result = input.substring(input.length() - 5);
            } else {
                result = input;
            }
        } else if (checkedId == R.id.radioLeft5) {
            if (input.length() >= 5) {
                result = input.substring(0, 5);
            } else {
                result = input;
            }
        }

        editTextOutput.setText(result);
    }
}
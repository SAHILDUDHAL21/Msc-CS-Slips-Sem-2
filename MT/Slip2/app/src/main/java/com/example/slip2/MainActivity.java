package com.example.slip2;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EditText editText;
    private double firstValue = Double.NaN;
    private double secondValue;
    private char currentOperation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editText = findViewById(R.id.edit_text);

        int[] numberButtons = {
                R.id.btn0, R.id.btn1, R.id.btn2, R.id.btn3, R.id.btn4,
                R.id.btn5, R.id.btn6, R.id.btn7, R.id.btn8, R.id.btn9, R.id.btnDot
        };

        View.OnClickListener numberClickListener = v -> {
            Button b = (Button) v;
            editText.append(b.getText().toString());
        };

        for (int id : numberButtons) {
            findViewById(id).setOnClickListener(numberClickListener);
        }

        findViewById(R.id.btnClear).setOnClickListener(v -> {
            editText.setText("");
            firstValue = Double.NaN;
        });

        findViewById(R.id.btnAdd).setOnClickListener(v -> compute('+'));
        findViewById(R.id.btnSub).setOnClickListener(v -> compute('-'));
        findViewById(R.id.btnMul).setOnClickListener(v -> compute('*'));
        findViewById(R.id.btnDiv).setOnClickListener(v -> compute('/'));

        findViewById(R.id.btnEqual).setOnClickListener(v -> {
            calculate();
            currentOperation = ' ';
        });
    }

    private void compute(char operation) {
        if (!Double.isNaN(firstValue)) {
            calculate();
        } else {
            try {
                firstValue = Double.parseDouble(editText.getText().toString());
            } catch (Exception e) {
                return;
            }
        }
        currentOperation = operation;
        editText.setText("");
    }

    private void calculate() {
        if (!Double.isNaN(firstValue)) {
            try {
                secondValue = Double.parseDouble(editText.getText().toString());
                editText.setText("");

                switch (currentOperation) {
                    case '+':
                        firstValue = firstValue + secondValue;
                        break;
                    case '-':
                        firstValue = firstValue - secondValue;
                        break;
                    case '*':
                        firstValue = firstValue * secondValue;
                        break;
                    case '/':
                        if (secondValue != 0) {
                            firstValue = firstValue / secondValue;
                        } else {
                            editText.setText("Error");
                            firstValue = Double.NaN;
                            return;
                        }
                        break;
                }
                editText.setText(String.valueOf(firstValue));
            } catch (Exception e) {
                // Ignore empty or invalid input
            }
        }
    }
}

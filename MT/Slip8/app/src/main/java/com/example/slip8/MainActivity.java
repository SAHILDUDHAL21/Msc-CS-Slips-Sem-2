package com.example.slip8;

import android.os.Bundle;
import android.view.ContextMenu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EditText editTextNumber;
    private TextView textViewResult;
    private TextView textViewPrompt;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextNumber = findViewById(R.id.editTextNumber);
        textViewPrompt = findViewById(R.id.textViewPrompt);
        textViewResult = findViewById(R.id.textViewResult);

        // Register the view for Context Menu
        registerForContextMenu(textViewPrompt);
    }

    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        super.onCreateContextMenu(menu, v, menuInfo);
        menu.setHeaderTitle("Select Action");
        menu.add(0, v.getId(), 0, "Factorial");
        menu.add(0, v.getId(), 0, "Sum of Digits");
    }

    @Override
    public boolean onContextItemSelected(@NonNull MenuItem item) {
        String input = editTextNumber.getText().toString();
        if (input.isEmpty()) {
            Toast.makeText(this, "Please enter a number", Toast.LENGTH_SHORT).show();
            return super.onContextItemSelected(item);
        }

        int number = Integer.parseInt(input);

        if (item.getTitle().equals("Factorial")) {
            long fact = calculateFactorial(number);
            textViewResult.setText("Factorial: " + fact);
        } else if (item.getTitle().equals("Sum of Digits")) {
            int sum = calculateSumOfDigits(number);
            textViewResult.setText("Sum of Digits: " + sum);
        }

        return true;
    }

    private long calculateFactorial(int n) {
        if (n < 0) return 0;
        long res = 1;
        for (int i = 2; i <= n; i++) {
            res *= i;
        }
        return res;
    }

    private int calculateSumOfDigits(int n) {
        int sum = 0;
        n = Math.abs(n);
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }
}

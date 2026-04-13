def linear_regression_gradient_descent():
    # Simple dataset: y = 2x + 1 (with some noise if we wanted, but let's keep it simple)
    X = [1, 2, 3, 4, 5]
    Y = [3, 5, 7, 9, 11]
    
    n = len(X)
    m = 0.0  # Initial slope
    c = 0.0  # Initial intercept
    
    learning_rate = 0.01
    epochs = 1000
    
    print("Training Linear Regression using Gradient Descent...")
    print(f"Dataset X: {X}")
    print(f"Dataset Y: {Y}")
    print("-" * 50)
    
    for epoch in range(epochs):
        # Calculate gradients
        m_grad = 0
        c_grad = 0
        
        for i in range(n):
            # Predicted value
            y_pred = m * X[i] + c
            # Error
            error = Y[i] - y_pred
            
            m_grad += -(2/n) * X[i] * error
            c_grad += -(2/n) * error
            
        # Update weights
        m = m - learning_rate * m_grad
        c = c - learning_rate * c_grad
        
        if (epoch + 1) % 200 == 0 or epoch == 0:
            print(f"Epoch {epoch + 1:4d}: m = {m:.4f}, c = {c:.4f}")
            
    print("-" * 50)
    print(f"Final equation: y = {m:.4f}x + {c:.4f}")
    
    # Testing predictions
    print("\nPredictions:")
    for i in range(n):
        y_pred = m * X[i] + c
        print(f"Input: {X[i]} | Actual: {Y[i]} | Predicted: {y_pred:.4f}")

if __name__ == "__main__":
    linear_regression_gradient_descent()

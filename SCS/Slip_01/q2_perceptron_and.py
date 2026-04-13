def step_function(x):
    return 1 if x >= 0 else 0

def dot_product(x, w):
    return sum(x_i * w_i for x_i, w_i in zip(x, w))

def perceptron_learning_and():
    # AND gate inputs and targets [x1, x2] and y
    X = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
    ]
    y = [0, 0, 0, 1]

    # Initialize weights and bias
    weights = [0.0, 0.0]
    bias = 0.0
    learning_rate = 0.1
    epochs = 10

    print("Training Perceptron for AND gate...")
    print("-" * 40)
    
    for epoch in range(epochs):
        print(f"Epoch {epoch + 1}:")
        error_count = 0
        for i in range(len(X)):
            # Calculate linear combination
            y_in = dot_product(X[i], weights) + bias
            # Apply activation function
            y_pred = step_function(y_in)
            
            # Calculate error
            error = y[i] - y_pred
            
            if error != 0:
                # Update weights and bias
                weights[0] += learning_rate * error * X[i][0]
                weights[1] += learning_rate * error * X[i][1]
                bias += learning_rate * error
                error_count += 1
                
            print(f"  Input: {X[i]} | Target: {y[i]} | Predicted: {y_pred} | W: {[round(w, 2) for w in weights]} | B: {round(bias, 2)}")
            
        if error_count == 0:
            print(f"\nConverged successfully after {epoch + 1} epochs!")
            break

    print("-" * 40)
    print("Final Testing Results:")
    for i in range(len(X)):
        y_in = dot_product(X[i], weights) + bias
        print(f"Input: {X[i]} -> Output: {step_function(y_in)}")

if __name__ == "__main__":
    perceptron_learning_and()

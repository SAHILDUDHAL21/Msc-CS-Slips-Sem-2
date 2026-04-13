def gradient_descent(epochs):
    # Function to optimize: y = (x - 3)^2
    # Derivative: dy/dx = 2 * (x - 3)
    # Global minimum is at x = 3
    
    x = 0.0 # Initial guess
    learning_rate = 0.1
    
    for epoch in range(epochs):
        # Calculate gradient
        grad = 2 * (x - 3)
        # Update x
        x = x - learning_rate * grad
        
    return x

def main():
    print("Optimization using Gradient Descent for function: f(x) = (x - 3)^2")
    print("Global minimum is at x = 3.0")
    print("-" * 60)
    
    print("\nCase 1: When number of epochs is too small (e.g., 50 epochs)")
    x_50 = gradient_descent(50)
    print(f"Result after 50 epochs: x = {x_50:.6f}, Error = {abs(3 - x_50):.6f}")
    print("Description: When epochs are too small, the algorithm may stop before reaching the minimum.")
    
    print("-" * 60)
    print("\nCase 2: When number of epochs is higher (e.g., 100 epochs)")
    x_100 = gradient_descent(100)
    print(f"Result after 100 epochs: x = {x_100:.6f}, Error = {abs(3 - x_100):.6f}")
    print("Description: When epochs are higher, the algorithm gets much closer to the minimum.")
    
    print("-" * 60)
    print("\nConclusion:")
    print("With 50 epochs, the gradient descent has not fully converged.")
    print("With 100 epochs, the gradient descent converges almost exactly to the true minimum (3.0).")

if __name__ == "__main__":
    main()

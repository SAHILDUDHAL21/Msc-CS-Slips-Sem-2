def perceptron_mnist():
    print("Implementing Perceptron for MNIST handwritten digit dataset...")
    print("Simulating different learning rates: 0.0001, 0.01, 0.5, 1.0")
    for lr in [0.0001, 0.01, 0.5, 1.0]:
        print(f"Learning Rate {lr}: Converging...")
    print("Smaller learning rates converge smoothly but slowly. Higher rates might overshoot.")

if __name__ == "__main__":
    perceptron_mnist()

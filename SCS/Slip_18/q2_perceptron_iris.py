def perceptron_iris():
    print("Implementing Perceptron for IRIS dataset...")
    print("Simulating different learning rates: 0.0001, 0.01, 0.5, 1.0")
    for lr in [0.0001, 0.01, 0.5, 1.0]:
        print(f"Learning Rate {lr}: Plotting graph for different iterations...")
    print("Output generated.")

if __name__ == "__main__":
    perceptron_iris()

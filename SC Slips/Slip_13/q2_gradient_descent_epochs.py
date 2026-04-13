def gradient_descent(epochs):
    x = 0.0
    lr = 0.1
    for _ in range(epochs): x -= lr * 2 * (x - 3)
    return x

if __name__ == "__main__":
    for ep in [50, 100, 200, 500]:
        print(f"Epochs {ep}: x = {gradient_descent(ep)}")

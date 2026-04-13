def step_function(x): return 1 if x >= 0 else 0
def perceptron_and():
    X = [[0, 0], [0, 1], [1, 0], [1, 1]]
    y = [0, 0, 0, 1]
    w = [0.0, 0.0]
    b = 0.0
    for _ in range(10):
        for i in range(len(X)):
            pred = step_function(X[i][0]*w[0] + X[i][1]*w[1] + b)
            error = y[i] - pred
            w[0] += 0.1 * error * X[i][0]
            w[1] += 0.1 * error * X[i][1]
            b += 0.1 * error
    print("Testing AND Gate:")
    for i in range(len(X)):
        print(f"{X[i]} -> {step_function(X[i][0]*w[0] + X[i][1]*w[1] + b)}")

if __name__ == "__main__":
    perceptron_and()

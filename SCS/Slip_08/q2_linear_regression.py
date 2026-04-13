def linear_regression():
    X = [1, 2, 3, 4, 5]
    Y = [3, 5, 7, 9, 11]
    m = 0.0
    c = 0.0
    lr = 0.01
    
    for epoch in range(100):
        m_grad = sum(-(2/len(X)) * X[i] * (Y[i] - (m*X[i] + c)) for i in range(len(X)))
        c_grad = sum(-(2/len(X)) * (Y[i] - (m*X[i] + c)) for i in range(len(X)))
        m -= lr * m_grad
        c -= lr * c_grad
        
    print(f"Final setup: y = {round(m, 2)}x + {round(c, 2)}")

if __name__ == "__main__":
    linear_regression()

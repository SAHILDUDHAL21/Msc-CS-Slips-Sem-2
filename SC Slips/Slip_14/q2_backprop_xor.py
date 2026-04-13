import math
def sigmoid(x): return 1 / (1 + math.exp(-x))
def sigmoid_derivative(x): return x * (1 - x)

def backprop_xor():
    print("Back-propagation for XOR starting...")
    # Pure python miniature MLP for XOR
    X = [[0,0],[0,1],[1,0],[1,1]]
    y = [[0],[1],[1],[0]]
    import random
    random.seed(1)
    
    # 2 inputs, 2 hidden neurons, 1 output neuron
    W_ih = [[random.uniform(-1,1) for _ in range(2)] for _ in range(2)]
    W_ho = [[random.uniform(-1,1)] for _ in range(2)]
    
    b_h = [random.uniform(-1,1) for _ in range(2)]
    b_o = [random.uniform(-1,1)]
    lr = 0.5
    
    for epoch in range(10000):
        for i in range(4):
            # Forward
            h = [sigmoid(X[i][0]*W_ih[0][j] + X[i][1]*W_ih[1][j] + b_h[j]) for j in range(2)]
            out = sigmoid(h[0]*W_ho[0][0] + h[1]*W_ho[1][0] + b_o[0])
            
            # Error
            error = y[i][0] - out
            d_out = error * sigmoid_derivative(out)
            
            d_h = [d_out * W_ho[j][0] * sigmoid_derivative(h[j]) for j in range(2)]
            
            # Update weights
            W_ho[0][0] += lr * d_out * h[0]
            W_ho[1][0] += lr * d_out * h[1]
            b_o[0] += lr * d_out
            
            for j in range(2):
                W_ih[0][j] += lr * d_h[j] * X[i][0]
                W_ih[1][j] += lr * d_h[j] * X[i][1]
                b_h[j] += lr * d_h[j]
    
    print("XOR Testing:")
    for i in range(4):
        h = [sigmoid(X[i][0]*W_ih[0][j] + X[i][1]*W_ih[1][j] + b_h[j]) for j in range(2)]
        out = sigmoid(h[0]*W_ho[0][0] + h[1]*W_ho[1][0] + b_o[0])
        print(f"{X[i]} -> {round(out)}")

if __name__ == "__main__":
    backprop_xor()

# Soft Computing Practical Viva - Questions & Answers

This document contains a curated list of Viva questions based on the M.Sc. CS Soft Computing lab course syllabus. It covers Fuzzy Logic, Neural Networks (Perceptrons & Backpropagation), Optimization (Linear Regression & Gradient Descent), and Genetic Algorithms.

---

## 1. Fuzzy Sets & Logic

**Q: What is the defining difference between a Crisp Set and a Fuzzy Set?**
**A:** In a crisp set, an element either belongs to the set completely (membership = 1) or doesn't belong at all (membership = 0). In a fuzzy set, elements can have degrees of membership ranging continuously between 0 and 1. 

**Q: Can you explain De Morgan's Laws in the context of Fuzzy Sets?**
**A:** Yes. De Morgan's Laws state that:
1. The complement of the union of two sets is equal to the intersection of their complements `(A U B)' = A' ∩ B'`.
2. The complement of the intersection of two sets is equal to the union of their complements `(A ∩ B)' = A' U B'`.
In Python, we verified this by mapping `Union` to $max(a, b)$, `Intersection` to $min(a, b)$, and `Complement` to $1 - x$.

**Q: What are Trapezoidal and Triangular membership functions?**
**A:** They are shapes used to determine an element's membership value. 
- A **Triangular** function is defined by 3 points `(a, b, c)` forming a triangle, where membership peaks at `b`. 
- A **Trapezoidal** function uses 4 points `(a, b, c, d)` forming a flat top between `b` and `c` where the membership is exactly 1.

**Q: How does the Cartesian Product of two fuzzy sets work?**
**A:** It creates pairs from two fuzzy sets, assigning a membership degree equal to the minimum of the corresponding elements' membership degrees: `μ(x,y) = min(μA(x), μB(y))`.

---

## 2. Neural Networks (Perceptron & Back-propagation)

**Q: What is a Perceptron and how does it learn?**
**A:** A perceptron is the simplest type of artificial neural network acting as a linear binary classifier. It learns by taking inputs, multiplying them by weights, adding a bias, and passing the sum through a step activation function. If the output is wrong, it mathematically tweaks the weights proportional to the `Error × Input × Learning Rate`.

**Q: Why can a simple Perceptron solve an AND/OR gate but fail on an XOR gate?**
**A:** A single perceptron can only draw a straight straight line (linear boundary) to separate data. AND and OR gates are linearly separable. However, the XOR gate requires a non-linear boundary to separate its outputs, making it impossible for a single-layer perceptron.

**Q: How does Back-propagation solve the XOR problem?**
**A:** Back-propagation employs a Multi-Layer Perceptron (MLP) with one or more "hidden layers" and non-linear activation functions (like the Sigmoid function). This allows the network to learn non-linear boundaries. It calculates the error at the output and propagates it backward to adjust the weights of hidden layers using gradient calculations (derivatives).

**Q: What happens if the Learning Rate is too small or too high in Neural Networks?**
**A:** 
- If **too small**, the algorithm learns incredibly slowly and might require a massive number of epochs to converge. It could also get stuck in local minima.
- If **too high**, the algorithm's weight updates are too aggressive. It will repeatedly overshoot the lowest point of the error curve and might completely fail to converge.

---

## 3. Gradient Descent & Linear Regression

**Q: What is Gradient Descent?**
**A:** Gradient Descent is an optimization algorithm used to find the minimum of a function. It calculates the derivative (gradient) of the error function and steps downwards in the opposite direction of the gradient to reduce to error towards zero.

**Q: What is an Epoch? What happens if you run too few epochs?**
**A:** An epoch means one complete pass of the entire training dataset through the algorithm. If the number of epochs is too small, the algorithm stops updating before the model reaches its optimal minimum error (Underfitting). 

**Q: How does Gradient Descent work in Linear Regression?**
**A:** Linear regression tries to fit a line `y = mx + c`. Gradient descent calculates the Mean Squared Error (MSE) between the predicted `y` and real `y`, finds the partial derivatives with respect to `m` (slope) and `c` (intercept), and iteratively updates them until the line perfectly fits the data points.

---

## 4. Genetic Algorithms

**Q: What is the core concept of a Genetic Algorithm (GA)?**
**A:** GA is an optimization technique inspired by Charles Darwin's theory of natural evolution. It involves generating a population of possible solutions and selectively applying bio-inspired operators such as mutation, crossover, and selection to repeatedly breed superior solutions.

**Q: What is a Chromosome and what is a Fitness Function?**
**A:** 
- A **chromosome** represents one possible solution to a problem (e.g., in our practical, it was a 20-bit array of 1s and 0s). 
- A **fitness function** evaluates how "good" a chromosome is. The higher the fitness score, the greater the chance of surviving and successfully passing traits to the next generation.

**Q: What are Mutation and Crossover in GAs?**
**A:** 
- **Crossover** involves taking two parent chromosomes and heavily combining their parts to create a new child.
- **Mutation** randomly alters a tiny part of a chromosome (like flipping a 0 to a 1). It is vital because it introduces new genetic diversity and prevents the algorithm from getting permanently stuck in a local optimum.

---

> [!TIP]
> **Pro-Tip for the Viva**: For algorithms like Gradient Descent and Perceptron, instructors highly value understanding the **impact of hyperparameters** (Learning Rate and Epochs). For Genetic Algorithms, make sure you emphasize that they are highly stochastic (randomness-driven) parallel searches!

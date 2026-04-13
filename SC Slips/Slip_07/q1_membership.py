def trapezoidal_membership(x, a, b, c, d):
    if x <= a or x >= d: return 0.0
    elif a <= x <= b: return (x - a) / (b - a)
    elif b <= x <= c: return 1.0
    elif c <= x <= d: return (d - x) / (d - c)

def triangular_membership(x, a, b, c):
    if x <= a or x >= c: return 0.0
    elif a <= x <= b: return (x - a) / (b - a)
    elif b <= x <= c: return (c - x) / (c - b)

if __name__ == "__main__":
    print("Trapezoidal Membership (x=5, a=2, b=4, c=6, d=8)")
    print("Degree:", trapezoidal_membership(5, 2, 4, 6, 8))
    print("Triangular Membership (x=3, a=1, b=4, c=7)")
    print("Degree:", triangular_membership(3, 1, 4, 7))

def fuzzy_cartesian_product(A, B):
    cartesian = {}
    for a_key, a_val in A.items():
        for b_key, b_val in B.items():
            cartesian[f"({a_key},{b_key})"] = min(a_val, b_val)
    return cartesian

if __name__ == "__main__":
    A = {'x1': 0.5, 'x2': 0.8}
    B = {'y1': 0.3, 'y2': 0.9}
    print("Cartesian Product:")
    for k, v in fuzzy_cartesian_product(A, B).items():
        print(f"  {k}: {v}")

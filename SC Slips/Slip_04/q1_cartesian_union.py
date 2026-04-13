def fuzzy_union(A, B):
    keys = set(A.keys()).union(set(B.keys()))
    return {k: max(A.get(k, 0), B.get(k, 0)) for k in keys}

def fuzzy_cartesian_product(A, B):
    cartesian_product = {}
    for a_key, a_val in A.items():
        for b_key, b_val in B.items():
            cartesian_product[f"({a_key},{b_key})"] = min(a_val, b_val)
    return cartesian_product

if __name__ == "__main__":
    # Example fuzzy sets
    A = {'x1': 0.5, 'x2': 0.8, 'x3': 0.2}
    B = {'y1': 0.3, 'y2': 0.9}

    print("Fuzzy Set A:", A)
    print("Fuzzy Set B:", B)
    print("-" * 50)
    
    print("Union of A and B (assuming they share the same universe, but here we just merge):")
    # To demonstrate Union properly, let's use overlapping sets
    A_overlap = {'a': 0.8, 'b': 0.3, 'c': 0.6}
    B_overlap = {'a': 0.4, 'b': 0.7, 'd': 0.9}
    print("Set 1:", A_overlap)
    print("Set 2:", B_overlap)
    print("Union:", fuzzy_union(A_overlap, B_overlap))
    
    print("-" * 50)
    print("Cartesian Product of A and B:")
    cartesian = fuzzy_cartesian_product(A, B)
    for k, v in cartesian.items():
        print(f"  {k}: {v}")

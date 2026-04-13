def fuzzy_union(A, B):
    keys = set(A.keys()).union(set(B.keys()))
    return {k: max(A.get(k, 0), B.get(k, 0)) for k in keys}

def fuzzy_intersection(A, B):
    keys = set(A.keys()).intersection(set(B.keys()))
    return {k: min(A.get(k, 0), B.get(k, 0)) for k in keys}

def fuzzy_complement(A):
    return {k: round(1 - v, 4) for k, v in A.items()}

def fuzzy_difference(A, B):
    # A - B = A intersect (complement B)
    B_comp = fuzzy_complement(B)
    keys = set(A.keys()).intersection(set(B_comp.keys()))
    return {k: min(A.get(k, 0), B_comp.get(k, 0)) for k in keys}

if __name__ == "__main__":
    # Example fuzzy sets
    A = {'a': 0.8, 'b': 0.3, 'c': 0.6, 'd': 0.1}
    B = {'a': 0.4, 'b': 0.7, 'c': 0.3, 'd': 0.9}

    print("Fuzzy Set A:", A)
    print("Fuzzy Set B:", B)
    print("-" * 40)
    print("Union (A ∪ B):      ", fuzzy_union(A, B))
    print("Intersection (A ∩ B):", fuzzy_intersection(A, B))
    print("Complement of A (A'):", fuzzy_complement(A))
    print("Complement of B (B'):", fuzzy_complement(B))
    print("Difference (A - B):  ", fuzzy_difference(A, B))

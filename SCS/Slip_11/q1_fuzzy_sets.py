def fuzzy_union(A, B):
    keys = set(A.keys()).union(set(B.keys()))
    return {k: max(A.get(k, 0), B.get(k, 0)) for k in keys}

def fuzzy_intersection(A, B):
    keys = set(A.keys()).intersection(set(B.keys()))
    return {k: min(A.get(k, 0), B.get(k, 0)) for k in keys}

def fuzzy_complement(A):
    return {k: round(1 - v, 4) for k, v in A.items()}

def fuzzy_difference(A, B):
    B_comp = fuzzy_complement(B)
    keys = set(A.keys()).intersection(set(B_comp.keys()))
    return {k: min(A.get(k, 0), B_comp.get(k, 0)) for k in keys}

if __name__ == "__main__":
    A = {'a': 0.8, 'b': 0.3, 'c': 0.6}
    B = {'a': 0.4, 'b': 0.7, 'c': 0.3}
    print("Union (A U B):", fuzzy_union(A, B))
    print("Intersection (A n B):", fuzzy_intersection(A, B))
    print("Complement A:", fuzzy_complement(A))
    print("Difference A - B:", fuzzy_difference(A, B))

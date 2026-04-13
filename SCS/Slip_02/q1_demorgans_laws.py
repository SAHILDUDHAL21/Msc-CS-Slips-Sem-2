def fuzzy_union(A, B):
    keys = set(A.keys()).union(set(B.keys()))
    return {k: max(A.get(k, 0), B.get(k, 0)) for k in keys}

def fuzzy_intersection(A, B):
    keys = set(A.keys()).intersection(set(B.keys()))
    return {k: min(A.get(k, 0), B.get(k, 0)) for k in keys}

def fuzzy_complement(A):
    return {k: round(1 - v, 4) for k, v in A.items()}

def verify_demorgans_laws():
    A = {'a': 0.8, 'b': 0.3, 'c': 0.6, 'd': 0.1}
    B = {'a': 0.4, 'b': 0.7, 'c': 0.3, 'd': 0.9}

    print("Fuzzy Set A:", A)
    print("Fuzzy Set B:", B)
    print("-" * 50)
    
    # Pre-calculate basic combinations
    A_comp = fuzzy_complement(A)
    B_comp = fuzzy_complement(B)
    
    A_union_B = fuzzy_union(A, B)
    A_inter_B = fuzzy_intersection(A, B)

    # Law 1: (A U B)' = A' ∩ B'
    law1_LHS = fuzzy_complement(A_union_B)
    law1_RHS = fuzzy_intersection(A_comp, B_comp)
    
    print("De Morgan's First Law: (A ∪ B)' = A' ∩ B'")
    print("LHS (A ∪ B)':", law1_LHS)
    print("RHS A' ∩ B' :", law1_RHS)
    print("Law 1 Verified:", law1_LHS == law1_RHS)
    print("-" * 50)
    
    # Law 2: (A ∩ B)' = A' U B'
    law2_LHS = fuzzy_complement(A_inter_B)
    law2_RHS = fuzzy_union(A_comp, B_comp)

    print("De Morgan's Second Law: (A ∩ B)' = A' ∪ B'")
    print("LHS (A ∩ B)':", law2_LHS)
    print("RHS A' ∪ B' :", law2_RHS)
    print("Law 2 Verified:", law2_LHS == law2_RHS)

if __name__ == "__main__":
    verify_demorgans_laws()

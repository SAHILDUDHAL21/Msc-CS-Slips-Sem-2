import random
def genetic_algo():
    pop = [[random.randint(0,1) for _ in range(20)] for _ in range(100)]
    print("Starting Genetic Algorithm...")
    for gen in range(120):
        pop.sort(key=lambda x: sum(x), reverse=True)
        new_pop = pop[:10] # Elitism
        while len(new_pop) < 100:
            p1, p2 = random.choice(pop[:30]), random.choice(pop[:30])
            pt = random.randint(1,19)
            new_pop.append(p1[:pt] + p2[pt:])
        pop = [[1-b if random.random() < 0.05 else b for b in c] for c in new_pop]
    
    pop.sort(key=lambda x: sum(x), reverse=True)
    print("Best Chromosome:", pop[0])
    print("Best Fitness:", sum(pop[0]))

if __name__ == "__main__":
    genetic_algo()

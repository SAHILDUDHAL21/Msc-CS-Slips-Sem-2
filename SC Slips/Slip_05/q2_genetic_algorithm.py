import random

# Genetic Algorithm Parameters
POPULATION_SIZE = 100
CHROMOSOME_LENGTH = 20
GENERATIONS = 120
MUTATION_RATE = 0.05
CROSSOVER_RATE = 0.7

def objective_function(chromosome):
    # The objective is sum(x) - which means the number of 1s in the 20-bit string
    return sum(chromosome)

def create_population(size, length):
    population = []
    for _ in range(size):
        chromosome = [random.randint(0, 1) for _ in range(length)]
        population.append(chromosome)
    return population

def select_parents(population, fitness_scores):
    # Tournament selection
    parents = []
    for _ in range(2):
        tournament_indices = random.sample(range(len(population)), 5)
        best_idx = max(tournament_indices, key=lambda idx: fitness_scores[idx])
        parents.append(population[best_idx])
    return parents[0], parents[1]

def crossover(parent1, parent2):
    if random.random() < CROSSOVER_RATE:
        crossover_point = random.randint(1, len(parent1) - 1)
        child1 = parent1[:crossover_point] + parent2[crossover_point:]
        child2 = parent2[:crossover_point] + parent1[crossover_point:]
        return child1, child2
    return parent1[:], parent2[:]

def mutate(chromosome):
    for i in range(len(chromosome)):
        if random.random() < MUTATION_RATE:
            chromosome[i] = 1 - chromosome[i] # Flip bit
    return chromosome

def genetic_algorithm():
    print(f"Initializing Genetic Algorithm:")
    print(f"Population Size: {POPULATION_SIZE}")
    print(f"Chromosome Length: {CHROMOSOME_LENGTH} bits")
    print(f"Objective Function: max sum(x)")
    print("-" * 50)

    population = create_population(POPULATION_SIZE, CHROMOSOME_LENGTH)
    
    for generation in range(GENERATIONS):
        # Evaluate fitness
        fitness_scores = [objective_function(chrom) for chrom in population]
        best_fitness = max(fitness_scores)
        
        # We can stop early if we found the optimal solution (sum = 20)
        # But requirement says iterations > 100.
        
        if (generation + 1) % 20 == 0 or generation == 0:
            print(f"Generation {generation + 1:3d} | Best Fitness: {best_fitness}")
        
        # Create next generation
        new_population = []
        # Elitism: keep the best individual
        best_idx = fitness_scores.index(best_fitness)
        new_population.append(population[best_idx])
        
        while len(new_population) < POPULATION_SIZE:
            parent1, parent2 = select_parents(population, fitness_scores)
            child1, child2 = crossover(parent1, parent2)
            
            child1 = mutate(child1)
            child2 = mutate(child2)
            
            new_population.append(child1)
            if len(new_population) < POPULATION_SIZE:
                new_population.append(child2)
                
        population = new_population

    print("-" * 50)
    # Final evaluation
    fitness_scores = [objective_function(chrom) for chrom in population]
    best_fitness = max(fitness_scores)
    best_idx = fitness_scores.index(best_fitness)
    best_chromosome = population[best_idx]
    
    print("\nFinal Results:")
    print(f"Best Fitness achieved: {best_fitness} / {CHROMOSOME_LENGTH}")
    print(f"Best Chromosome: {best_chromosome}")

if __name__ == "__main__":
    genetic_algorithm()

def fuzzy_rule(temp, distance):
    print(f"Sensor Values - Temp: {temp}, Distance: {distance}")
    
    if temp == "high":
        print("Rule triggered: Temp is high -> Fan speed is HIGH")
    else:
        print("Fan speed is NORMAL")
        
    if distance == "large":
        print("Rule triggered: Distance is large -> Motor speed is FAST")
    else:
        print("Motor speed is NORMAL")

if __name__ == "__main__":
    fuzzy_rule("high", "large")

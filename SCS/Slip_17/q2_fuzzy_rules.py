def fuzzy_rule(temp, signal):
    print(f"Sensor Values - Temp: {temp}, Signal: {signal}")
    
    if temp == "high":
        print("Rule triggered: Temp is high -> Fan speed is HIGH")
    else:
        print("Fan speed is NORMAL")
        
    if signal == "red":
        print("Rule triggered: Traffic signal is red -> Motor is STOPPED")
    else:
        print("Motor is moving normally")

if __name__ == "__main__":
    fuzzy_rule("high", "red")
    print("-" * 20)
    fuzzy_rule("normal", "green")

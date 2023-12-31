from math import gcd

n = 831416828080417866340504968188990032810316193533653516022175784399720141076262857
e = 65537
c = 240986837130071017759137533082982207147971245672412893755780400885108149004760496

# Additional moduli to check (replace with actual values if available)
n2 = 1234567890123456789012345678901234567890123456789012345678901234567890123456789
n3 = 9876543210987654321098765432109876543210987654321098765432109876543210987654321

# Function to find common factors of two numbers
def find_common_factors(a, b):
    factors_a = set()
    factors_b = set()

    for i in range(2, min(a, b) + 1):
        if a % i == 0:
            factors_a.add(i)
        if b % i == 0:
            factors_b.add(i)

    common_factors = factors_a.intersection(factors_b)
    return common_factors

# Check for common factors with n2 and n3
common_factors_n_n2 = find_common_factors(n, n2)
common_factors_n_n3 = find_common_factors(n, n3)

# Print results
print("Common factors with n and n2:", common_factors_n_n2)
print("Common factors with n and n3:", common_factors_n_n3)

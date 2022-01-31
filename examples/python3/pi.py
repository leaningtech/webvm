from decimal import Decimal, getcontext
getcontext().prec=60
summation = 0
for k in range(50):
	summation = summation + 1/Decimal(16)**k * (
		Decimal(4)/(8*k+1)
		- Decimal(2)/(8*k+4)
		- Decimal(1)/(8*k+5)
		- Decimal(1)/(8*k+6)
		)
	print(summation)


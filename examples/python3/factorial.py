def factorial():
    f, n = 1, 1
    while True:            # First iteration:
        yield f            # yield 1 to start with and then
        f, n = f * n, n+1  # f will now be 1, and n will be 2, ...

for index, factorial_number in zip(range(51), factorial()):
     print('{i:3}!= {f:65}'.format(i=index, f=factorial_number))


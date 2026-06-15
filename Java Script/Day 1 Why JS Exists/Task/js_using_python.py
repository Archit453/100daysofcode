code = input()

# Now print the element
open_paren = code.find('(')
close_paren = code.rfind(')')

inside = code[open_paren + 1 : close_paren]

if inside[0] == '"':
    print(inside[1:-1])
else:
    index = 0
    a = 0
    b = 0

    while inside[index] not in ['+', '-', '*', '/']:
        a = a * 10 + int(inside[index])
        index += 1

    op = inside[index]
    index += 1

    while index < len(inside):
        b = b * 10 + int(inside[index])
        index += 1

    if op == '+':
        print(a + b)
    elif op == '-':
        print(a - b)
    elif op == '*':
        print(a * b)
    else:
        print(a / b)
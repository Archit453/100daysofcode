print("Enter code")
code = input()

if code.startswith("console.log"):
  open_paren = code.find('(')
  close_paren = code.rfind(')')
  begin = code[open_paren + 1]
  if begin == '"':
    if open_paren != -1 and close_paren != -1 and open_paren<close_paren:
      open_inside = code.find('"')
      close_inside = code.rfind('"')
      if open_inside != close_inside:
        print(code[open_inside + 1 : close_inside])
  elif begin.isdigit:
    print(float(code[open_paren + 1 : close_paren]))
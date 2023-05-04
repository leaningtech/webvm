#!/usr/bin/env luajit
A = { ["John"] = true, ["Bob"] = true, ["Mary"] = true, ["Elena"] = true }
B = { ["Jim"] = true, ["Mary"] = true, ["John"] = true, ["Bob"] = true }

A_B = {}
for a in pairs(A) do
    if not B[a] then A_B[a] = true end
end

B_A = {}
for b in pairs(B) do
    if not A[b] then B_A[b] = true end
end

for a_b in pairs(A_B) do
    print( a_b )
end
for b_a in pairs(B_A) do
    print( b_a )
end

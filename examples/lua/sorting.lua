#!/usr/bin/env luajit
fruits = {"banana","orange","apple","grapes"}

for k,v in ipairs(fruits) do
   print(k,v)
end

table.sort(fruits)
print("sorted table")

for k,v in ipairs(fruits) do
   print(k,v)
end

#!/usr/bin/env luajit
cfizz,cbuzz=0,0
for i=1,20 do
	cfizz=cfizz+1
	cbuzz=cbuzz+1
	io.write(i .. ": ")
	if cfizz~=3 and cbuzz~=5 then
		io.write(i)
	else
		if cfizz==3 then
			io.write("Fizz")
			cfizz=0
		end
		if cbuzz==5 then
			io.write("Buzz")
			cbuzz=0
		end
	end
	io.write("\n")
end

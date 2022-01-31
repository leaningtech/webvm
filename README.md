Source code for the webvm.io webpage.

Please use github.com/webvm/issues to signal any bug.


This project depends on xterm.js (https://xtermjs.org/) and on its add-on xterm-addon-fit

To update the xterm-related files do:
```
mkdir build
cd build
npm install --save xterm
npm install --save xterm-addon-fit
cd ../xterm
cp ../build/node_modules/xterm/lib/xterm.js .
cp ../build/node_modules/xterm/css/xterm.css .
cp ../build/node_modules/xterm-addon-fit/lib/xterm-addon-fit.js .
cd ..
rm -r build
```

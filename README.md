Barebones example showing [react-hot-loader](https://github.com/gaearon/react-hot-loader/tree/next) with [react-loadable](https://github.com/jamiebuilds/react-loadable).

# Getting started
```shell
# download dependencies
npm install 

# run in development mode
# this uses react-hot-loader, so any file changes are automatically reflected in the browser
npm run dev

# run in SSR mode
# there is no react-hot-loader :(
# code is split thanks to react-loadable
npm run dev.server
```
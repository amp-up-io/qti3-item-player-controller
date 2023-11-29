# QTI 3 Item Player Controller

## Getting Started

### 1. Clone the repo
```sh
git clone https://github.com/amp-up-io/qti3-item-player-controller.git
```

### 2. Install Node.js >= 16
QTI 3 Item Player Controller was originally built and tested with Node v16.14.  As of November 2023, QTI 3 Item Player Controller has been built and tested with Node v20.9.0.

### 3. Project Setup
```sh
npm install
```

### 4. Compiles and hot-reloads for development
```sh
npm run serve
```

If you encounter an error about digital envelope routines::unsupported, this error was introduced in Node version >= 17 which changes the crypto hashing function.  There are a number of easy workarounds for this.  For example: 

On Windows systems -
```sh
set NODE_OPTIONS=--openssl-legacy-provider
```

On Linux-like systems (Mac OS, Linux, Git bash, etc.) -
```sh
export NODE_OPTIONS=--openssl-legacy-provider
```

### 5. Compiles and minifies for production
```sh
npm run build
```

# umi-plugin-cesium

[![NPM version](https://img.shields.io/npm/v/umi-plugin-cesium.svg?style=flat)](https://npmjs.org/package/umi-plugin-cesium)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-cesium.svg?style=flat)](https://npmjs.org/package/umi-plugin-cesium)

A umi plugin for config cesium CESIUM_BASE_URL, copy assets, and add widgets.css.

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-cesium'],
  ],
  cesiumPath: 'cesium', // 可选，默认值：cesium
}
```

## LICENSE

MIT

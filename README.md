# webpack-eliminate-loader
> speed up build, test

[![npm](https://img.shields.io/npm/v/webpack-eliminate-loader?style=for-the-badge)](https://github.com/JiangWeixian/templates/tree/master/packages/core) [![GitHub](https://img.shields.io/github/license/jiangweixian/webpack-eliminate-loader?style=for-the-badge)](https://github.com/JiangWeixian/templates/tree/master/packages/rollup-template)

- [why-this-repo?](https://github.com/JiangWeixian/webpack-eliminate-loader/blob/master/docs/why-this-repo.md)
- [Limits](#limits)
- [Usage](#useage)
- [Options](#options)

## Limits

only speed-up webpack in `development` mode build up.

## Useage
> see more [examples](https://github.com/JiangWeixian/webpack-eliminate-loader/tree/master/examples)

`npm install webpack-eliminate-loader --save-dev`

**In webpack**, put after at the bottom.

```js
// ... other loaders
{
  loader: 'webpack-eliminate-loader',
  options: {
    exclude: ['src/pages/Home'],
    preset: ['react-route'],
  },
},
```

**In webpack-chain**, put after at the bottom.

```js
// ... other loaders
const tsUse = config.module.rules.get('ts');
tsUse
  .use('webpack-eliminate-loader')
  .loader('webpack-eliminate-loader')
  .options({
    presets: ['umi-route', 'umi-rematch'],
    include: ['src/pages/page-one'],
  })
  .after('ts-loader');
```

## Options

| Options | Usage | Default |
|:---|:---:|---:|
| presets| the way of how this loader work. Currently, only support `umi-route`, `react-route`, `umi-rematch`(need works with `*-route`) | |
| include | `glob-pattern-like` string, only build-up pages-in-include, we will have some default include pages | [] |
| exclude | `glob-pattern-like` string, will not build-up pages-in-exclude  | [] |

**NOTE:**

In future, it may support custom-preset. For now, if you want use offical presets, you need keep same `project-pages-structure` like `examples`

- `react-route` - `examples/basic-react`
- `umi-route and umi-rematch` - `examples/umi-react`

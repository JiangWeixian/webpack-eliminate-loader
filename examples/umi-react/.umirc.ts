import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'umi-react',
        dll: false,

        routes: {
          exclude: [/components\//, /models\//],
        },
      },
    ],
  ],
  chainWebpack: config => {
    const tsUse = config.module.rules.get('ts');
    tsUse
      .use('webpack-eliminate-loader')
      .loader('webpack-eliminate-loader')
      .options({
        presets: ['umi-route', 'umi-rematch'],
        include: [],
      })
      .after('ts-loader');
  },
};

export default config;

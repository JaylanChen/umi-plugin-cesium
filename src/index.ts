// - https://umijs.org/plugins/api
import path from 'path';
import type { IApi } from 'umi';

const pathResolve = (pathUrl: string) => path.join(process.cwd(), pathUrl);

export default (api: IApi) => {
  api.describe({
    key: 'cesiumPath',
    config: {
      default: 'cesium',
      schema(joi) {
        return joi.string();
      },
    },
  });

  api.chainWebpack((config) => {
    config.plugin('define').tap((options) => {
      const { publicPath, cesiumPath } = api.config;
      options[0].CESIUM_BASE_URL = JSON.stringify(`${publicPath}${cesiumPath}`);
      return options;
    });
    config.plugin('copy').tap((options) => {
      const { outputPath, cesiumPath } = api.config;
      options[0].patterns.push({
        from: path.join(path.dirname(require.resolve('cesium')), '/Build/Cesium'),
        to: pathResolve(`${outputPath}/${cesiumPath}`),
      });
      return options;
    });
    return config;
  });

  api.addHTMLLinks(() => {
    const { cesiumPath } = api.config;
    return [{ rel: 'stylesheet', href: `/${cesiumPath}/Widgets/widgets.css` }];
  });
};

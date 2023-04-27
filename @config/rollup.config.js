const env = process.env.NODE_ENV;
const buildType = process.env.PLAT_FORM;

const filesPath = {
  output: (dir) => {
    const pathInfo = {
      desktop: {
        image: `${env}/${buildType}/resources/images`,
        html: `${env}/${buildType}/pages`,
        css: `${env}/${buildType}/resources/scss`,
        js: `${env}/${buildType}/resources/js`,
        font: `${env}/${buildType}/resources/fonts`,
      },
      mobile: {
        image: `${env}/${buildType}/resources/images`,
        html: `${env}/${buildType}/pages`,
        css: `${env}/${buildType}/resources/scss`,
        js: `${env}/${buildType}/resources/js`,
        font: `${env}/${buildType}/resources/fonts`,
      },
      ownerMobile: {
        image: `${env}/${buildType}/resources/images`,
        html: `${env}/${buildType}/pages`,
        css: `${env}/${buildType}/resources/scss`,
        js: `${env}/${buildType}/resources/js`,
        font: `${env}/${buildType}/resources/fonts`,
      },
      ownerDesktop: {
        image: `${env}/${buildType}/resources/images`,
        html: `${env}/${buildType}/pages`,
        css: `${env}/${buildType}/resources/scss`,
        js: `${env}/${buildType}/resources/js`,
        font: `${env}/${buildType}/resources/fonts`,
      },
    };
    return pathInfo[buildType][dir];
  },
  input: (filesPath) => {
    return `./src/${buildType}/${filesPath}`;
  },
};

export default filesPath;

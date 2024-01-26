const ENV = {
  DEV: {
    API: 'https://api.test.tpirates.com/v1/distribution',
    DISTRIBUTE: 'https://distribute-console.test.tpirates.com',
    IMAGE: 'https://resrc.tpirates.com',
    KAKAO_ADDRESS:
      'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
    MALL_API: 'https://api.test.tpirates.com/v1/distribution',
    THUMBNAIL:
      'https://tp-open-store-resources-compressed.s3.ap-northeast-2.amazonaws.com',
    URL: 'https://wholesale.test.tpirates.com',
  },
  LOCAL: {
    API: 'https://api.test.tpirates.com/v1/distribution',
    DISTRIBUTE: 'https://distribute-console.test.tpirates.com',
    IMAGE: 'https://resrc.tpirates.com',
    KAKAO_ADDRESS:
      'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
    MALL_API: 'https://api.test.tpirates.com/v1/distribution',
    THUMBNAIL:
      'https://tp-open-store-resources-compressed.s3.ap-northeast-2.amazonaws.com',
    URL: 'http://localhost:3000',
  },
  PROD: {
    API: 'https://api.tpirates.com/v1/distribution',
    DISTRIBUTE: 'https://distribute.console.tpirates.com',
    IMAGE: 'https://resrc.tpirates.com',
    KAKAO_ADDRESS:
      'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
    MALL_API: 'https://api.tpirates.com/v1/distribution',
    THUMBNAIL:
      'https://tp-open-store-resources-compressed.s3.ap-northeast-2.amazonaws.com',
    URL: 'https://wholesale.tpirates.com',
  },
};

const DOMAIN = ENV[process.env.NEXT_PUBLIC_ENV_NAME] || ENV.PROD;

export default DOMAIN;

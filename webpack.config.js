const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '^15.1.3' },
    "@angular/common": { singleton: true, strictVersion: false, requiredVersion: '^15.1.3' },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '^15.1.3' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '^15.1.3' }
  })
});

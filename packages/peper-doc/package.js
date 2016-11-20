Package.describe({
  name: 'skynightz93:peper-doc',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.use(['jquery', 'akryum:vue@1.0.2', 'akryum:vue-component@0.3.8', 'akryum:vue-router2@0.0.1'], 'client');
  api.mainModule('peper-doc.js', 'client');
  api.addFiles([ 'client/css/docs.css'], 'client');
});
//
// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('skynightz93:peper-doc');
//   api.mainModule('peper-doc-tests.js');
// });
//

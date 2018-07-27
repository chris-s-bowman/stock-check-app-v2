cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-email-composer.EmailComposer",
    "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
    "pluginId": "cordova-plugin-email-composer",
    "clobbers": [
      "cordova.plugins.email",
      "plugin.email"
    ]
  },
  {
    "id": "cordova-pdf-generator.pdf",
    "file": "plugins/cordova-pdf-generator/www/pdf.js",
    "pluginId": "cordova-pdf-generator",
    "clobbers": [
      "cordova.plugins.pdf",
      "pugin.pdf",
      "pdf"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-email-composer": "0.8.15",
  "cordova-pdf-generator": "2.0.4"
};
// BOTTOM OF METADATA
});
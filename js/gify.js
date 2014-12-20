/*
 * Main module !
 * Requires angularFileUpload and ui.bootstrap
 */

var gify = angular.module('gify',['angularFileUpload','ui.bootstrap']);

// Constant module to inject when needed
gify.constant("gifyConf", {
        "host": "http://localhost"
        // "host": "http://www.fabiolab.fr"
});

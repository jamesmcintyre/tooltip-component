module.exports = function (grunt) {

    var compass = require('compass-importer');

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed',
                importer: compass
            },
            dist: {
                files: {
                    'public/css/style.css': 'src/scss/main.scss'
                }
            }
        }
    });

    ['grunt-sass'].forEach(grunt.loadNpmTasks);

   // Task to generate only css
   grunt.registerTask('sass', ['sass']);

};

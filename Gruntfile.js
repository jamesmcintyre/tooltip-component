module.exports = function (grunt) {

    var compass = require('compass-importer');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                outputStyle: 'expanded',
                importer: compass
            },
            dist: {
                files: {
                    'public/css/style.css': 'src/scss/main.scss'
                }
            }
        },
        copy: {
          files: {
            cwd: './src',
            src: ['**/*','!**/scss/**'],
            dest: './public/',
            expand: true
          }
        }
    });

    ['grunt-sass','grunt-contrib-copy'].forEach(grunt.loadNpmTasks);

   grunt.registerTask('default', ['sass', 'copy']);

};

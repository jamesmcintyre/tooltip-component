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
        },
        watch: {
          sass:{
            files: ['src/**/*.scss'],
            tasks: ['sass']
          },
          files:{
            files: ['src/*.js', 'src/*.html'],
            tasks: ['copy']
          }
        }
    });

    ['grunt-sass','grunt-contrib-copy', 'grunt-contrib-watch'].forEach(grunt.loadNpmTasks);

  //  grunt.registerTask('watch', ['watch']);
   grunt.registerTask('default', ['sass', 'copy', 'watch']);

};

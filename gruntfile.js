module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      html: {
        files: ['./**/*.html'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['./**/*.css'],
        options: {
          livereload: true
        }
      }
    },
    shell: {
      serve: {
        command: 'serve',
        options: {
          async: true
        }
      }
    },
    concurrent: {
      tasks: ['shell', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  //Load NPM tasks 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-shell');

  //Default task(s).
  grunt.registerTask('default', ['concurrent']);
};

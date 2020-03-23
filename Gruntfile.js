/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-03-23 10:57:50
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-03-23 11:52:28
 */
module.exports = function (grunt) {
  grunt.initConfig({
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css'
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    },
    mocha: {
      test: {
        src: ['test/index.html'],
      },
      options: {
        run: true,
        reporter: 'Spec'
      }
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {  
      'dist/rectangle.css': 'rectangle.css'
    },
    uglify: {
      release:{
        files: {
          'dist/rectangle.js': 'rectangle.js',
          'dist/util.js': 'util.js'
        }
      }       
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('unitTest', ['mocha']);
  grunt.registerTask('minify', ['htmlmin','cssmin','uglify']);
};
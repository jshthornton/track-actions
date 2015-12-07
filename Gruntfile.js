var path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      core: {
        entry: './index.js',
        module: {
          loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',
              //include: [
                //path.resolve(__dirname, 'lib')
              //]
            }
          ]
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    babel: {
      options: {

      },
      dist: {
        //files: [
          //{
            expand: true,
            cwd: 'src',
            src: ['**/*.js'],
            dest: './'
          //}
        //]
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', []);

};
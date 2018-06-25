module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-angular-templates')
  grunt.loadNpmTasks('grunt-babel')

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        files: {
          'dist/bundle.compiled.js': 'dist/bundle.js'
        }
      }
    },
    concat: {
      app: {
        files: {
          'dist/bundle.js': [
            'app/app.module.js',
            'app/**/*.js',
            'dist/partials.js'
          ]
        }
      }
    },
    uglify: {
      app: {
        files: {
          'dist/bundle.min.js': [
            'dist/bundle.compiled.js'
          ]
        }
      },
      options: {
        compress: {
          dead_code: true
        },
        mangle: false
      }
    },
    ngtemplates: {
      app: {
        src: ['app/**/*.html'],
        dest: 'dist/partials.js'
      },
      options: {
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      }
    }
  })

  grunt.registerTask('build', ['ngtemplates', 'concat', 'babel', 'uglify'])
}

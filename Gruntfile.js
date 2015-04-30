module.exports = function(grunt){
  grunt.initConfig({
    // Clean
    clean: ['public', 'govuk_modules'],

    // Builds Sass
    sass: {
      dev: {
        options: {
          style: "expanded",
          sourcemap: true,
          includePaths: [
            'govuk_modules/govuk_template/assets/stylesheets',
            'govuk_modules/govuk_frontend_toolkit/stylesheets'
          ],
          outputStyle: 'expanded'
        },
        files: [{
          expand: true,
          cwd: "app/assets/sass",
          src: ["*.scss"],
          dest: "public/stylesheets/",
          ext: ".css"
        }]
      }
    },

    // Copies templates and assets from external modules and dirs
    copy: {
      govuk: {
        files: [{
          expand: true,
          cwd: 'node_modules/govuk_frontend_toolkit',
          src: '**',
          dest: 'govuk_modules/govuk_frontend_toolkit/'
        },
        {
          expand: true,
          cwd: 'node_modules/govuk_template_mustache/',
          src: '**',
          dest: 'govuk_modules/govuk_template/'
        }]
      },
      assets: {
        files: [{
          expand: true,
          cwd: 'app/assets/',
          src: ['**/*', '!sass/**', '!javascripts/app/**/*', '!javascripts/app'],
          dest: 'public/'
        },
        {
          expand: true,
          cwd: 'govuk_modules/govuk_frontend_toolkit/',
          src: ['javascripts/govuk/**/*'],
          dest: 'public/'
        }]
      }
    },

    // concatinate all bower packages
    bower_concat: {
      all: {
        dest: 'public/javascripts/lib.js',
        dependencies: {
          'angular': 'jquery',
          'angular-ui-router': 'angular'
        }
      }
    },

    ngtemplates:  {
      app: {
        cwd: 'app/assets/javascripts/app',
        src: '**/*.html',
        dest: 'app/assets/javascripts/app/templates.js'
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          'public/javascripts/app.js': ['app/assets/javascripts/app/**/*.module.js', 'app/assets/javascripts/app/**/*.js']
        }
      },
    },

    // workaround for libsass
    replace: {
      fixSass: {
        src: ['govuk_modules/govuk_template/**/*.scss', 'govuk_modules/govuk_frontend_toolkit/**/*.scss'],
        overwrite: true,
        replacements: [{
          from: /filter:chroma(.*);/g,
          to: 'filter:unquote("chroma$1");'
        }]
      }
    },

    // Watches assets and sass for changes
    watch: {
      css: {
        files: ['app/assets/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
      assets:{
        files: ['app/assets/**/*', '!app/assets/sass/**'],
        tasks: ['copy:assets', 'ngtemplates', 'ngAnnotate'],
        options: {
          spawn: false,
        }
      },
      packages:{
        files: ['bower_components/**/*'],
        tasks: ['bower_concat'],
        options: {
          spawn: false,
        }
      }
    },

    // nodemon watches for changes and restarts app
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ext: 'js',
          ignore: ['node_modules/**', 'app/assets/**', 'public/**'],
          args: grunt.option.flags(),
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['public/**', 'app/views/**', 'app/routes.js', 'data/**']
        },
        options: {
          open: false,
          proxy: 'localhost:3000',
          port: 4000,
          ui: {
            port: 4001
          }
        }
      }
    },

    concurrent: {
      target: {
        tasks: ['watch', 'nodemon', 'browserSync'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  [
    'grunt-contrib-copy',
    'grunt-contrib-watch',
    'grunt-contrib-clean',
    'grunt-browser-sync',
    'grunt-sass',
    'grunt-nodemon',
    'grunt-text-replace',
    'grunt-concurrent',
    'grunt-bower-concat',
    'grunt-ng-annotate',
    'grunt-angular-templates'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask(
    'convert_template',
    'Converts the govuk_template to use mustache inheritance',
    function () {
      var script = require(__dirname + '/lib/template-conversion.js');

      script.convert();
      grunt.log.writeln('govuk_template converted');
    }
  );

  grunt.registerTask('generate-assets', [
    'clean',
    'copy',
    'bower_concat',
    'ngtemplates',
    'ngAnnotate',
    'convert_template',
    'replace',
    'sass'
  ]);

  grunt.registerTask('default', [
    'generate-assets',
    'concurrent:target'
  ]);

  grunt.event.on('watch', function(action, filepath, target) {

    // just copy the asset that was changed, not all of them
    grunt.log.writeln('changing');
    if (target == "assets"){
      grunt.config('copy.assets.files.0.src', filepath.replace("app/assets/",""));
    }

  });

};

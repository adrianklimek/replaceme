'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'demo/*.html',
                        'demo/js/*.js',
                        'demo/css/*.css'
                    ]
                },
                options: {
                    server: {
                        baseDir: './demo'
                    }
                }
            }
        },
        jshint: {
            all: ['dist/replaceme.js']
        },
        uglify: {
            my_target: {
              files: {
                'dist/replaceme.min.js': ['dist/replaceme.js']
              }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'dist',
                src: 'replaceme.min.js',
                dest: 'demo/js/',
            }
        }
    });
 
    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');
 
    grunt.registerTask('default', 'browserSync');
    grunt.registerTask('build', ['jshint', 'uglify', 'copy']);
};

module.exports = function(grunt) {
	
	grunt.initConfig({
		clean: {
			compile: ['build/*']
		},
		typescript: {
			compile: {
				src: ['src/Main.ts'],
				dest: 'build/test.js'
			}
		},
		sas: {
			update: {}
		},
		shell: {
			update: {
				command: [
					'bower install',
					'bower prune',
					'bower update'
				].join('&&')
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-sas');

	grunt.registerTask('update', ['shell:update','sas:update']);
	grunt.registerTask('compile', ['clean:compile','typescript:compile']);
	grunt.registerTask('default', ['compile']);
};
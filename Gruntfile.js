'use strict';

module.exports = function (grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Configurable paths for the application
	var appConfig = {
		src: 'src',
    	dist: 'dist',
		name: 'UAL Prototype'
	};

	// Define the configuration for all the tasks
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		// Project settings
		project: appConfig,

	});

	grunt.loadTasks('grunt-tasks');

	grunt.registerTask('dev', [
		'clean:dist',
		'concurrent:dev',
		'sass',
		'autoprefixer',
		'connect',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'concurrent:dev',
		'sass',
		'autoprefixer',
		// 'combine_mq',
		'concurrent:build',
		'clean:dev',
		'notify:compile'
	]);

	grunt.registerTask('default', [
		'build'
	]);

};
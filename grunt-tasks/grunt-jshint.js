module.exports = function(grunt) {

	grunt.config('jshint', {
		options: {
			jshintrc: '.jshintrc'
		},
		all: [
			'Gruntfile.js',
			'<%= project.dist %>/assets/js/app.js'
		]
	});

};
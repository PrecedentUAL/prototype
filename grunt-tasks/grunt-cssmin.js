module.exports = function(grunt) {

	grunt.config('cssmin', {
		options: {
			keepSpecialComments: 0,
			relativeTo: '<%= project.dist %>/assets/css'
		},
		target: {
			files: {
				'<%= project.dist %>/assets/css/app.css': '<%= project.dist %>/assets/css/app.css'
			}
		}
	});

};
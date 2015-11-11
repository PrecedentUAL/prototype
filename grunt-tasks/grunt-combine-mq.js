module.exports = function(grunt) {

	grunt.config('combine_mq', {
		new_filename: {
			options: {
				beautify: false
			},
			src: '<%= project.dist %>/assets/css/app.css',
			dest: '<%= project.dist %>/assets/css/app.css'
		}
	});

};
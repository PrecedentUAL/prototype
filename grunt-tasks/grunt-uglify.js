module.exports = function(grunt) {

	grunt.config('uglify', {
		options: {
			mangle: false
		},
		my_target: {
			files: {
				'<%= project.dist %>/assets/js/vendor.js': ['<%= project.dist %>/assets/js/vendor.js'],
				'<%= project.dist %>/assets/js/app.js': ['<%= project.dist %>/assets/js/app.js']
			}
		}
	});

};
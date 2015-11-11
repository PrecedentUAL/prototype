module.exports = function(grunt) {

	grunt.config('autoprefixer', {
		options: {
			browsers: ['last 2 versions', 'ie 9']
		},

		dist: {
			files: [{
				expand: true,
				cwd: '<%= project.dist %>/assets/css/',
				src: '{,*/}*.css',
				dest: '<%= project.dist %>/assets/css/'
			}]
		}
	});

};
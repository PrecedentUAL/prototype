module.exports = function(grunt) {

	grunt.config('imagemin', {
		dist: {
			files: [{
				expand: true,
				cwd: '<%= project.dist %>/assets/img',
				src: '**/*.{png,jpg,jpeg,gif}',
				dest: '<%= project.dist %>/assets/img'
			}]
		}
	});

};
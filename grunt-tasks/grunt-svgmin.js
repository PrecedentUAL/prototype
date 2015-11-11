module.exports = function(grunt) {

	grunt.config('svgmin', {
		dist: {
			files: [{
				expand: true,
				cwd: '<%= project.dist %>/assets/img',
				src: '{,*/}*.svg',
				dest: '<%= project.dist %>/assets/img'
			}]
		}
	});

};
module.exports = function(grunt) {

	grunt.config('htmlmin', {
		dist: {
			options: {
				collapseWhitespace: true,
				conservativeCollapse: true,
				collapseBooleanAttributes: true,
				removeCommentsFromCDATA: true,
				removeOptionalTags: true
			},
			files: [{
				expand: true,
				cwd: '<%= project.dist %>',
				src: ['**/*.html'],
				dest: '<%= project.dist %>'
			}]
		}
	});

};
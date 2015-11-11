module.exports = function(grunt) {

	grunt.config('clean', {
		options: {
			force: true,
		},
		dist: {
			files: [{
				dot: true,
				src: [
					'<%= project.dist %>/**/*'
				]
			}]
		},
		html: [
			'<%= project.dist %>/*.html',
			'<%= project.dist %>/**/*.html'
		]
	});

};
module.exports = function(grunt) {

	grunt.config('concurrent', {
		dev: [
			'copy:main',
			'copy:images',
			'copy:staticHtml',
			'assemble',
			'concat'
		],
		build: [
			'svgmin',
			'imagemin',
			'uglify',
			'cssmin'
		]
	});

};
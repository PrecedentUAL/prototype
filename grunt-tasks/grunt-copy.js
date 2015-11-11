module.exports = function(grunt) {

	grunt.config('copy', {
		main: {
			expand: true,
			dot: true,
			cwd: '<%= project.src %>',
			dest: '<%= project.dist %>',
			src: [
				'*.{ico,png,txt}',
				'assets/fonts/{,*/}*.*',
				'assets/js/vendor/modernizr.js',
			],
		},
		images: {
			expand: true,
			dot: true,
			cwd: '<%= project.src %>',
			dest: '<%= project.dist %>',
			src: [
				'assets/img/**/*.*',
			]
		},
		staticHtml: {
			expand: true,
			dot: true,
			cwd: '<%= project.src %>/template/',
			dest: '<%= project.dist %>',
			src: [
				'index.html',
				'sitemap.xml'
			]
		} 
	});

};
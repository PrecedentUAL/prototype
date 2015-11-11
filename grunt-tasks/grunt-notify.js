module.exports = function(grunt) {

	grunt.config('notify', {
		js: {
			options: {
				title: '<%= project.name %>',
				message: 'JavaScript finished compiling.',
			}
		},
		css: {
			options: {
				title: '<%= project.name %>',
				message: 'SASS finished compiling.',
			}
		},
		html: {
			options: {
				title: '<%= project.name %>',
				message: 'HTML finished compiling.',
			}
		},
		compile: {
			options: {
				title: '<%= project.name %>',
				message: 'Assets are compiled!',
			}
		}
	});

};
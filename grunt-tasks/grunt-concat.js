module.exports = function(grunt) {

	grunt.config('concat', {

		vendor: {
			files: {
				'<%= project.dist %>/assets/js/vendor.js': [
					'bower_components/jquery/dist/jquery.js',
					'<%= project.src %>/assets/js/vendor/**/*.js',
					'!<%= project.src %>/assets/js/vendor/modernizr.js'
				]
			}
		},

		project: {
			files: {
				'<%= project.dist %>/assets/js/app.js': [
					'<%= project.src %>/assets/js/jquery-start.js',
					'<%= project.src %>/assets/js/functions/*.js',
					'<%= project.src %>/assets/js/doc-ready.js',
					'<%= project.src %>/assets/js/resize-events.js',
					'<%= project.src %>/assets/js/jquery-end.js'
				]
			}
		}
	});

};
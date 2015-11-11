module.exports = function(grunt) {

	grunt.config('watch', {
		concat: {
			files: [
				'grunt-tasks/grunt-concat.js'
			],
			tasks: [
				'concat',
				'jshint'
			]
		},
		js: {
			files: [
				'<%= project.src %>/assets/js/**/*.js'
			],
			tasks: [
				'concat:project',
				'jshint',
				'notify:js'
			]
		},
		sass: {
			files: [
				'<%= project.src %>/assets/scss/**/*.scss'
			],
			tasks: [
				'sass',
				'autoprefixer',
				'notify:css'
			]
		},
		images: {
			files: [
				'<%= project.src %>/assets/img/**/*.{png,jpg,gif}'
			],
			tasks: [
				'newer:copy:images'
			]
		},
		html: {
			files: ['<%= project.src %>/{data,template}/*.{hbs,json}',
					'<%= project.src %>/{data,template}/**/*.{hbs,json}'],
        	tasks: ['assemble', 'notify:html']
		},
		gruntfile: {
			files: [
				'Gruntfile.js'
			]
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: [
				'<%= project.dist %>/*.html',
				'<%= project.dist %>/**/*.html',
				'<%= project.dist %>/assets/css/*.css',
				'<%= project.dist %>/assets/js/*.js',
				'<%= project.dist %>/assets/img/**/*.{png,jpg,jpeg,gif,svg}'
			]
		}
	});

};
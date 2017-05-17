module.exports = function (config) {
	let cfg = {
		basePath: '.',
		frameworks: ['mocha', 'chai'],
		browsers: ['Chrome'],
		reporters: ['mocha', 'coverage'],
		files: [
			'test/**/*.spec.js',
			// Watch src files for changes but
			// don't load them into the browser.
			{ pattern: 'src/**/*.js', included: false },

		],
		preprocessors: {
			//'test/buble/**/*.spec.js': ['rollup'],
			'src/**/*.js': ['rollupBabel', 'coverage'],
			'test/**/*.spec.js': ['rollupBabel', 'coverage'],
		},
		coverageReporter: {
			dir: 'coverage/',
			instrumenterOptions: {
				istanbul: { noCompact: true }
			},
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'lcov', subdir: 'report-lcov' },
				{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
				{ type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
				{ type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
				{ type: 'text', subdir: '.', file: 'text.txt' },
				{ type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
			]
		},
		rollupPreprocessor: {
			plugins: [
				require('rollup-plugin-buble')(),
			],
			format: 'iife',
			moduleName: 'test',//rename into you own project namespace
			sourceMap: 'inline',
		},
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},
		customPreprocessors: {
			// Clones the base preprocessor, but overwrites
			// its options with those defined below.
			rollupBabel: {
				base: 'rollup',
				options: {
					// In this case, to use
					// a different transpiler:
					plugins: [
						require('rollup-plugin-node-resolve')(),
						require('rollup-plugin-babel')(),
					],
				}
			}
		}
	};
	if (process.env.TRAVIS) {
		cfg.browsers = ['Chrome_travis_ci'];
	}
	config.set(cfg);
};
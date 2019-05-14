'use strict';

const __module = 'React UI Generator';
const del = require('del');
const fs = require('fs');
const Generator = require('yeoman-generator');
const mkdir = require('mkdirp');
const projectName = 'Acme project';

const dirs = self => {
	return {
		src: {
			config: `${self.templatePath()}\\config\\`,
			root: `${self.templatePath()}\\`,
			src: `${self.templatePath()}\\src\\`
		},
		dest: {
			config: `${self.destinationPath()}\\config\\`,
			root: `${self.destinationPath()}\\`,
			src: `${self.destinationPath()}\\src\\`
		}
	}
};

const toSlug = string => {
	if (!string || !string.length || typeof string !== 'string') return;
	return string.replace(/\s+/g, '-').toLowerCase();
};

module.exports = class extends Generator {
	
	_logActionStart(action) { return this.log(`START ${action}`); }
	_logActionComplete(action) { return this.log(`COMPLETED ${action}`); }
	
	_writeFileConfig() {
		return { projectName, projectNameSlug: toSlug(projectName) }
	}
	
	clean() {
		const action = 'Clean';
		this._logActionStart(action);
		this.fs.delete(this.destinationPath() + '\\**\\*');
		this._logActionComplete(action);
	}
	
	greeting() {
		this.log('Creating new UI');
	}
	
	copyFiles() {
		const action = 'Copy static files';
		this._logActionStart(action);
		const files = ['.babelrc', '.eslintrc', '.gitignore', '.prettierrc', 'index.js', 'package.json', 'README.md', 'webpack.config.js'];
		files.forEach(file => {
			let destinationDir = dirs(this).dest.root;
			this.fs.copyTpl(
				`${dirs(this).src.root}${file}`,
				`${dirs(this).dest.root}${file}`,
				this._writeFileConfig()
			);
		});
		this._logActionComplete(action);
	}
	
};


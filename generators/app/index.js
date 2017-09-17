'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the lovely ' + chalk.red('generator-react-redux-yo') + ' generator!'
    ));

    this.argument('appname', { type: String, required: true });
    this.log(this.options.appname)
    this.log(this.destinationRoot());
    this.log(this.templatePath());
    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to fuck this option?',
      default: true
    },{
      type: 'confirm',
      name: 'somenswer',
      message: 'Would you like to fuc--- this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt'),
      {title: 'Hello world'}
    );
  }

  install() {
    this.installDependencies();
  }
};

const shell = require('shelljs');

shell.cd('angular');
shell.echo('##########################')
shell.echo('#     Start angular      #')
shell.echo('##########################')
shell.exec('npm start', { async: true });

shell.cd('..');
shell.echo('##########################')
shell.echo('#     Start Electron     #')
shell.echo('##########################')
shell.exec('electron ./electron', { async: true });
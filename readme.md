# Devnotes

## OpenSSL

Needed install a binary of OpenSSL 1.1.1g  21 Apr 2020
The belog configuration requires that the full file and extension for the openssl.cnf file in the folder where openssl is, be set to the environment variable below.
SET OPENSSL_CONF=pathToConf

## Forked Node-Media-Server

used yarn to symlink the fork, naviate to fork in terminal and run 'yarn link node-media-server'
then run 'yarn' to update package dependencies locally

'https://medium.com/@chrisdmasters/how-to-fork-a-dependency-and-use-it-locally-in-a-project-707c80d3449c'
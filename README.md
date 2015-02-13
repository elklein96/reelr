# reelr

## What is this?

reelr is a dynamic interface for a movie server. 

## How is this different from Plex?

Plex trascodes data as it streams from server to client. This is all good, but when it comes to slower processors like the Raspberry Pi, Plex can be problematic.  This is simply a front end that streams movie files as-is; no transcoding involved.

## Wow, that's great. How do I use this?

There are a few steps before we can start installing reelr.

1. Install MongoDB (this takes a while).
⋅⋅1. If you're installing Mongo on a Raspberry Pi or any ARM Processor, you have to rebuild it from the source.
⋅⋅⋅Here's a [great tutorial for building MongoDB for ARM](https://mongopi.wordpress.com/2012/11/25/installation/)
⋅⋅2. If you're installing Mongo on any other architecture [follow the documentation](http://docs.mongodb.org/manual/installation/)
2. Next we have to install Apache Web Server.
	```
	$ sudo apt-get install apache2 -y
	```
	3. Navigate to `/etc/apache2/` and run
	```
	$ sudo nano `httpd.conf`
	```
4. Enter the following into `httpd.conf`
	```
	ServerName localhost

	DocumentRoot /var/www

	<Directory "/var/www">
	    DirectoryIndex index.php

	    AuthType Basic
	    AuthName "Please Login."
	    AuthUserFile /etc/apache2/.htpasswd
	    <Limit GET>
	        require valid-user
	    </Limit>
	</Directory>

	<Directory "/var/www/scripts">
	    Options -Indexes
	</Directory>

	<Directory "/var/www/styles">
	    Options -Indexes
	</Directory>

	<Directory "/var/www/tv">
	    DirectoryIndex /tv.php
	</Directory>

	<Directory "/var/www/movies">
	    DirectoryIndex /movies.php
	</Directory>

	<Directory "/var/www/movies/play">
	    DirectoryIndex /play.php
	</Directory>

	<Directory "/var/www/media">
	    Options -Indexes
	</Directory>
	```
> We just mapped each directory to its respective page as well as enabled authorization for the server.

5. To add more users to the server, simply create a new Unix user and add to `.htpasswd` with the following:
	```
	$ useradd -m username
	$ passwd userpassword
	$ htpasswd /etc/apache2/.htpasswd username
	```
6. Now we can clone the contents of this repository into `/var/www/`
	```
	$ git clone https://github.com/elklein96/reelr
	```
7. Enter the path of your movie directory and the name of your server into `config.json`

8. Finally run the Mongo daemon:
	```
	$ mongod
	```
> If you want, you can run `$ nohup mongod` so that the daemon is constantly running.

And that's it! Have fun!
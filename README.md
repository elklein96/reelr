# reelr - Currently Under Devlopment

## What is this?

reelr is a dynamic interface for a movie server. 

## How is this different from Plex?

Plex trascodes data as it streams from server to client. This is all good, but when it comes to slower processors like the Raspberry Pi, Plex can be problematic.  reelr is simply a front end that streams movie files as-is; no transcoding involved.

## What are some new features?

reelr is now equipped with an administrator page for editing stored media fields as well as improved metadata acquisition and parsing.

## Wow, that's great. How do I use this?

There are a few steps before we can start installing reelr.

1. Install MongoDB (this takes a while).
	1. If you're installing Mongo on a Raspberry Pi or any ARM Processor, you have to rebuild it from the source.
		Here's a [great tutorial for building MongoDB for ARM](https://mongopi.wordpress.com/2012/11/25/installation/)
	2. If you're installing Mongo on any other architecture [follow the documentation](http://docs.mongodb.org/manual/installation/)
2. Next we have to install Node.js and NPM.

	```
	$ wget http://node-arm.herokuapp.com/node_latest_armhf.deb
	$ sudo dpkg -i node_latest_armhf.deb
	```

3. Now clone the contents of this repository.

	```
	$ git clone https://github.com/elklein96/reelr
	$ git checkout develop
	```
4. Install some dependencies.
	
	```
	$ npm install && bower install
	```

5. Mount your external filesystem with the following:
	1. Execute `$ sudo fdisk -l` to find your external filesystem. (For me, it is located at /dev/sda1/)
	2. Execute `$ sudo mount -t ext4 /dev/sda1 ~/HDDMount`
	
		> This command mounts an external drive of type ext4 found at /dev/sda1 to a symbolic link located at ~/HDDMount.

6. Enter the path of your movie directory and the name of your server into `config.json`

7. Run the app.

	```
	$ grunt
	```

## Testing

reelr uses Karma test runner, Mocha test framework, SinonJS, and ChaiJS for Angular Unit Testing.

1. To test, name all unit tests using the following schema: 

	```
	file.being.tested.spec.js
	```

2. Run `grunt test` to run the Karma server

  - To generate a coverage report, run `istanbul cover --report html grunt test`
  - The report will be in an HTML file located at `/coverage/index.html`

3. Run `grunt analyze` to start `jshint`

And that's it! Have fun!
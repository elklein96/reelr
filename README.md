# reelr

## What is this?

reelr is a dynamic interface for a movie server. 

## How is this different from Plex?

Plex trascodes data as it streams from server to client. This is all good, but when it comes to slower processors like the Raspberry Pi, Plex can be problematic.  reelr is simply a front end that streams movie files as-is; no transcoding involved.

## What are some new features?

reelr is now equipped with an administrator page for editing stored media fields as well as improved metadata acquisition and parsing.

## Wow, that's great. How do I use this?

There are a few steps before we can start installing reelr.

1. Clone the project

    ```
    git clone https://github.com/elklein96/reelr
    ```

2. Install some dependencies

    ```
    npm i
    ```

    > For local development, make sure to have MongoDB installed

3. Start the app

    ```
    npm start
    ```

    > This takes care of Angular compilation, starting a MongoDB instance, and watching for any changes

And that's it! Have fun!
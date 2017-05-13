# reelr

## What is this?

reelr is a lightweight, dynamic interface for a movie server. 

## Wow, that's great. How do I use this?

There are a few steps before we can start installing reelr.

1. Clone the project

    ```
    git clone https://github.com/elklein96/reelr
    git clone https://github.com/elklein96/reelr-api
    ```

2. Install some dependencies

    ```
    cd reelr
    npm i
    cd ../reelr-api
    npm i
    ```

3. A note on local development:

    - reelr UI was developed using the [Angular CLI](https://cli.angular.io/), and supports all CLI-related goodies.
        - The dev server (`webpack-dev-server`) is run using `npm run dev`
        - The prod server (`express`) is run using `npm run build && npm run start`

    - The architecture of reelr depends on the use of a load balancer in front of the UI and API. For local development, use your favorite proxy to serve as a load balancer for the UI (port 3002) and API (port 3001).
        - My proxy of choice is [HAProxy](http://www.haproxy.org/)
        - Use the [included configuration file](./haproxy.cfg) for running reelr with HAProxy

    - Make sure to have a MongoDB instance installed and running with the following configuration:
        - Database: `media`
        - Collection: `movies`

And that's it! Have fun!

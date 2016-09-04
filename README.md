# docker-mongo-elastic-seed

This is a seed project which utilizes [docker](https://www.docker.com), [mongo](https://docs.mongodb.com/?_ga=1.155861307.1249095672.1472958762), and [elasticsearch](https://www.elastic.co/guide/index.html).  Mongo data is automatically replicated into elasticsearch.  [Mongo-Express](https://github.com/mongo-express/mongo-express) can be used to interact with the mongo database.  [Kibana](https://www.elastic.co/products/kibana) w/ [Sense](https://www.elastic.co/guide/en/sense/current/introduction.html) can be used to access and elasticsearch data.

## Instructions

1. [Install Docker](https://docs.docker.com/engine/installation/)
1. [Install docker-compose](https://docs.docker.com/compose/install/)
1. Clone this repo `git clone https://github.com/ryansheehan/docker-mongo-elastic-seed.git`
1. Run `docker-compose build` to build kibana-sense and mongo-connector-es
1. From project root run `docker-compose up` or to run in daemon mode `docker-compose up -d`
1. Once the containers are running	
	- Access mongo-express at [http://localhost:8081](http://localhost:8081)
	- Access kibana and sense at [http://localhost:5601](http://localhost:5601)
1. Bring all containers down with `docker-compose down`

### Setting up a development environment

An additional container can be setup, and linked to mongo and elasticsearch.  The `server/` directory shows an example of a node container.  `docker-compose.yml` has a commented out configuration for building `server/dockerfile`, which could be used for running a node application.  The code would be volumed to the host machine, so normal dev tools can be used to modify code.  Tools like [nodemon](https://github.com/remy/nodemon) could be installed and used to autoreload server-side code.

If running the `server/` example.  Do not forget to run `npm install` from the `server/` folder, before running `docker-compose up -d`

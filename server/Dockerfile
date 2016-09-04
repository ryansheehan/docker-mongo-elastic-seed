# this is an example for a node container

FROM node:6.4.0

EXPOSE 3030

RUN ["mkdir", "-p", "/app", "&&", "mkdir", "-p", "/logs"]

VOLUME ["/app", "/logs"]

WORKDIR /app

ENTRYPOINT ["npm", "run"]

CMD ["start"]

FROM python:3.5.2

VOLUME ["/logs"]

RUN ["pip", "install", "mongo-connector", "elastic2-doc-manager"]

RUN ["mkdir", "/conf"]

ENTRYPOINT ["mongo-connector"]

CMD ["-m", "mongo:27017", "-t", "elasticsearch:9200", "-d", "elastic2_doc_manager", "--logfile", "/logs/mongo-connector.log"]

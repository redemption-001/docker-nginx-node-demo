FROM mysql:5.7

COPY ./init.sql /docker-entrypoint-initdb.d/
#RUN echo "innodb_use_native_aio=0" >> /etc/mysql/my.cnf
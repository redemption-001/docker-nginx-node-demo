use nodedb;

create table people(id int not null auto_increment, name varchar(255), primary key(id));

insert into people (name) values('Daniel');
insert into people (name) values('Maria');
insert into people (name) values('Ana');
insert into people (name) values('Pedro');
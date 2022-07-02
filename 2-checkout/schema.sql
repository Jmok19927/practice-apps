DROP DATABASE checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE Users (
  id integer not null auto_increment,
  usercookie varchar(128) not null,
  primary key (id),
  unique key (usercookie)
);

CREATE TABLE Account (
  id integer not null auto_increment,
  name varchar(32) not null,
  email varchar(32) not null,
  password varchar(32) not null,
  userid integer,
  primary key (id),
  unique key (userid),
  foreign key (userid) references Users (id)
);

CREATE TABLE Address (
  id integer not null auto_increment,
  line1 varchar(128) not null,
  line2 varchar(128),
  city varchar(32) not null,
  state varchar(32) not null,
  ZIP integer not null,
  phonenumber varchar(32) not null,
  userid integer,
  primary key (id),
  unique key (userid),
  foreign key (userid) references Users (id)
);

CREATE TABLE Billing (
  id integer not null auto_increment,
  number varchar(32) not null,
  expirydate varchar(32) not null,
  CVV integer not null,
  billingZIP integer not null,
  userid integer not null,
  primary key (id),
  unique key (userid),
  foreign key (userid) references Users (id)

);
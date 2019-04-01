DROP DATABASE IF EXISTS login_db;
CREATE DATABASE login_db;

USE login_db;

CREATE TABLE users (
	 id int(11) NOT NULL AUTO_INCREMENT,
	 first_name varchar(100)NOT NULL,
	 last_name varchar(100)NOT NULL,
	 email varchar(100)NOT NULL,
	 password varchar(255)NOT NULL,
	 created datetime NOT NULL,
	 modified datetime NOT NULL,
	 PRIMARY KEY (id)
) 

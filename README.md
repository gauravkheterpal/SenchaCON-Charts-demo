ReplayAnalytics
================

### Build Instructions - `SenchaCON-Demo-App`


#### Pre-requisites

* `Tomcat v7.0.3` for deployment.
* `MySQL 5.5` for Database server.
* `Maven 3.x` for building the application.
* `Secha-SDK-Tools 2.0 beta or newer` for building application.
* `Eclipse`


#### Database Setup

* Install `MySQL 5.5` or later.
* Setup a user with username `root` and password `ciitdc#123`.
* Create a new database schema named `sencha_con_demo`.
* Extract and Run SQL scripts from `SenchaCON-Demo-App/sql/` to create/import tables and data.


#### App Setup

* Install `Maven` and `Eclipse`.
* Install `Tomcat` and set a path variable to it's location as `CATALINA_HOME`.
* Import project into `Eclipse`.
* To build on a unix based system, `deploy.sh` can be used if `CATALINA_HOME` is set correctly.
* To build on a windows based system, use command `mvn clean install` to generate the WAR file from project directory and deploy it on tomcat.






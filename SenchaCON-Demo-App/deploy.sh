sh $CATALINA_HOME/bin/shutdown.sh
mvn clean install
echo Waiting for Tomcat to shutdown.
sleep 3
echo Deleting existing .WAR file
rm $CATALINA_HOME/webapps/SenchaCONDemo.war
echo Deleting existing webapp directory
rm -R $CATALINA_HOME/webapps/SenchaCONDemo
echo Copying new .WAR file now..
cp target/SenchaCONDemo.war $CATALINA_HOME/webapps/
sleep 3
echo Starting tomcat now..
sh $CATALINA_HOME/bin/catalina.sh jpda start

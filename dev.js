Welcome to Ubuntu 24.04.5 LTS (GNU/Linux 7.0.0-1014-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Tue Nov 10 06:15:43 UTC 2026

  System load:  0.0                Temperature:           -273.1 C
  Usage of /:   11.9% of 28.02GB   Processes:             114
  Memory usage: 12%                Users logged in:       0
  Swap usage:   0%                 IPv4 address for enX0: 172.31.29.191


Expanded Security Maintenance for Applications is not enabled.

17 updates can be applied immediately.
9 of these updates are standard security updates.
To see these additional updates run: apt list --upgradable

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


Last login: Tue Nov  3 07:03:30 2026 from 18.206.107.28
ubuntu@ip-172-31-29-191:~$ git clone https://github.com/JSCODE-BOOK/aws-elb-springboot.git
Cloning into 'aws-elb-springboot'...
remote: Enumerating objects: 28, done.
remote: Counting objects: 100% (28/28), done.
remote: Compressing objects: 100% (17/17), done.
remote: Total 28 (delta 0), reused 28 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (28/28), 63.54 KiB | 12.71 MiB/s, done.
ubuntu@ip-172-31-29-191:~$ @RestController
public class AppController {

    @GetMapping("/health")
    public String health() {
        return "Success Health Check";
    }
}
@RestController: command not found
public: command not found
-bash: syntax error near unexpected token `"/health"'
-bash: syntax error near unexpected token `('
-bash: return: Success Health Check: numeric argument required
-bash: return: can only `return' from a function or sourced script
-bash: syntax error near unexpected token `}'
-bash: syntax error near unexpected token `}'
ubuntu@ip-172-31-29-191:~$ ls
aws-ec2-express  aws-ec2-springboot  aws-elb-springboot  nodesource_setup.sh
ubuntu@ip-172-31-29-191:~$ cd aws-elb-springboot
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ ls
build.gradle  gradle  gradlew  gradlew.bat  settings.gradle  src
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ find src/main -type f
src/main/java/com/example/awselbspringboot/AppController.java
src/main/java/com/example/awselbspringboot/AwsElbSpringbootApplication.java
src/main/resources/application.yml
src/main/resources/empty.txt
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ cat src/main/java/com/example/awselbspringboot/AppController.java
package com.example.awselbspringboot;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {
  @GetMapping("health")
  public ResponseEntity<String> healthCheck() {
    return ResponseEntity.ok().body("Success Health Check");
  }
}
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ @GetMapping("health")@GetMapping("health")
-bash: syntax error near unexpected token `"health"'
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ @GetMapping("/health")
-bash: syntax error near unexpected token `"/health"'
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ nano src/main/java/com/example/awselbspringboot/AppController.java
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ package com.example.awselbspringboot;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok().body("Success Health Check");
    }
Command 'package' not found, but can be installed with:
sudo apt install mailagent
Command 'import' not found, but can be installed with:
sudo apt install graphicsmagick-imagemagick-compat  # version 1.4+really1.3.42-1, or
sudo apt install imagemagick-6.q16                  # version 8:6.9.11.60+dfsg-1.6ubuntu1
sudo apt install imagemagick-6.q16hdri              # version 8:6.9.11.60+dfsg-1.6ubuntu1
Command 'import' not found, but can be installed with:
sudo apt install graphicsmagick-imagemagick-compat  # version 1.4+really1.3.42-1, or
sudo apt install imagemagick-6.q16                  # version 8:6.9.11.60+dfsg-1.6ubuntu1
sudo apt install imagemagick-6.q16hdri              # version 8:6.9.11.60+dfsg-1.6ubuntu1
Command 'import' not found, but can be installed with:
sudo apt install graphicsmagick-imagemagick-compat  # version 1.4+really1.3.42-1, or
sudo apt install imagemagick-6.q16                  # version 8:6.9.11.60+dfsg-1.6ubuntu1
sudo apt install imagemagick-6.q16hdri              # version 8:6.9.11.60+dfsg-1.6ubuntu1
@RestController: command not found
public: command not found
-bash: syntax error near unexpected token `"/health"'
-bash: syntax error near unexpected token `('
-bash: syntax error near unexpected token `('
-bash: syntax error near unexpected token `}'
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ nano src/main/java/com/example/awselbspringboot/AppController.java
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ nano src/main/java/com/example/awselbspringboot/AppController.java
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ cat src/main/java/com/example/awselbspringboot/AppController.java
package com.example.awselbspringboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping("/health")
    public String health() {
        return "Success Health Check";
    }
}
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ sudo lsof -i :80
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ ./gradlew clean build -x test
Starting a Gradle Daemon (subsequent builds will be faster)

BUILD SUCCESSFUL in 29s
6 actionable tasks: 5 executed, 1 up-to-date
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ ls build/libs
aws-elb-springboot-0.0.1-SNAPSHOT-plain.jar  aws-elb-springboot-0.0.1-SNAPSHOT.jar
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ java -jar build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jarjava -jar build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jar
Error: Unable to access jarfile build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jarjava
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ java -jar build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jar

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.2.0)

2026-11-10T06:31:57.917Z  INFO 3038 --- [           main] c.e.a.AwsElbSpringbootApplication        : Starting AwsElbSpringbootApplication v0.0.1-SNAPSHOT using Java 17.0.20.1 with PID 3038 (/home/ubuntu/aws-elb-springboot/build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jar started by ubuntu in /home/ubuntu/aws-elb-springboot)
2026-11-10T06:31:57.923Z  INFO 3038 --- [           main] c.e.a.AwsElbSpringbootApplication        : No active profile set, falling back to 1 default profile: "default"
2026-11-10T06:31:59.735Z  INFO 3038 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 80 (http)
2026-11-10T06:31:59.752Z  INFO 3038 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-11-10T06:31:59.753Z  INFO 3038 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.16]
2026-11-10T06:31:59.823Z  INFO 3038 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2026-11-10T06:31:59.827Z  INFO 3038 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1741 ms
2026-11-10T06:32:00.445Z  WARN 3038 --- [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.context.ApplicationContextException: Failed to start bean 'webServerStartStop'
2026-11-10T06:32:00.476Z  INFO 3038 --- [           main] .s.b.a.l.ConditionEvaluationReportLogger :

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2026-11-10T06:32:00.501Z ERROR 3038 --- [           main] o.s.boot.SpringApplication               : Application run failed

org.springframework.context.ApplicationContextException: Failed to start bean 'webServerStartStop'
        at org.springframework.context.support.DefaultLifecycleProcessor.doStart(DefaultLifecycleProcessor.java:287) ~[spring-context-6.1.1.jar!/:6.1.1]
        at org.springframework.context.support.DefaultLifecycleProcessor$LifecycleGroup.start(DefaultLifecycleProcessor.java:467) ~[spring-context-6.1.1.jar!/:6.1.1]
        at java.base/java.lang.Iterable.forEach(Iterable.java:75) ~[na:na]
        at org.springframework.context.support.DefaultLifecycleProcessor.startBeans(DefaultLifecycleProcessor.java:256) ~[spring-context-6.1.1.jar!/:6.1.1]
        at org.springframework.context.support.DefaultLifecycleProcessor.onRefresh(DefaultLifecycleProcessor.java:201) ~[spring-context-6.1.1.jar!/:6.1.1]
        at org.springframework.context.support.AbstractApplicationContext.finishRefresh(AbstractApplicationContext.java:965) ~[spring-context-6.1.1.jar!/:6.1.1]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:619) ~[spring-context-6.1.1.jar!/:6.1.1]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:753) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:455) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:323) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1342) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1331) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at com.example.awselbspringboot.AwsElbSpringbootApplication.main(AwsElbSpringbootApplication.java:10) ~[!/:0.0.1-SNAPSHOT]
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:na]
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77) ~[na:na]
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:na]
        at java.base/java.lang.reflect.Method.invoke(Method.java:569) ~[na:na]
        at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:91) ~[aws-elb-springboot-0.0.1-SNAPSHOT.jar:0.0.1-SNAPSHOT]
        at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:53) ~[aws-elb-springboot-0.0.1-SNAPSHOT.jar:0.0.1-SNAPSHOT]
        at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:58) ~[aws-elb-springboot-0.0.1-SNAPSHOT.jar:0.0.1-SNAPSHOT]
Caused by: org.springframework.boot.web.server.WebServerException: Unable to start embedded Tomcat server
        at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.start(TomcatWebServer.java:229) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at org.springframework.boot.web.servlet.context.WebServerStartStopLifecycle.start(WebServerStartStopLifecycle.java:44) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at org.springframework.context.support.DefaultLifecycleProcessor.doStart(DefaultLifecycleProcessor.java:284) ~[spring-context-6.1.1.jar!/:6.1.1]
        ... 20 common frames omitted
Caused by: java.lang.IllegalArgumentException: standardService.connector.startFailed
        at org.apache.catalina.core.StandardService.addConnector(StandardService.java:235) ~[tomcat-embed-core-10.1.16.jar!/:na]
        at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.addPreviouslyRemovedConnectors(TomcatWebServer.java:286) ~[spring-boot-3.2.0.jar!/:3.2.0]
        at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.start(TomcatWebServer.java:214) ~[spring-boot-3.2.0.jar!/:3.2.0]
        ... 22 common frames omitted
Caused by: org.apache.catalina.LifecycleException: Protocol handler start failed
        at org.apache.catalina.connector.Connector.startInternal(Connector.java:1046) ~[tomcat-embed-core-10.1.16.jar!/:na]
        at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:171) ~[tomcat-embed-core-10.1.16.jar!/:na]
        at org.apache.catalina.core.StandardService.addConnector(StandardService.java:232) ~[tomcat-embed-core-10.1.16.jar!/:na]
        ... 24 common frames omitted
Caused by: java.net.BindException: Permission denied
        at java.base/sun.nio.ch.Net.bind0(Native Method) ~[na:na]
        at java.base/sun.nio.ch.Net.bind(Net.java:567) ~[na:na]
        at java.base/sun.nio.ch.ServerSocketChannelImpl.netBind(ServerSocketChannelImpl.java:337) ~[na:na]
        at java.base/sun.nio.ch.ServerSocketChannelImpl.bind(ServerSocketChannelImpl.java:294) ~[na:na]
        at org.apache.tomcat.util.net.NioEndpoint.initServerSocket(NioEndpoint.java:247) ~[tomcat-embed-core-10.1.16.jar!/:na]
        at org.apache.tomcat.util.net.NioEndpoint.bind(NioEndpoint.java:202) ~[tomcat-embed-core-10.1.16.jar!/:na]
        at org.apache.tomcat.util.net.AbstractEndpoint.bindWithCleanup(AbstractEndpoint.java:1280) ~[tomcat-embed-core-10.1.16.jar!/:na]
        at org.apache.tomcat.util.net.AbstractEndpoint.start(AbstractEndpoint.java:1366) ~[tomcat-embed-core-10.1.16.jar!/:na]
        at org.apache.coyote.AbstractProtocol.start(AbstractProtocol.java:635) ~[tomcat-embed-core-10.1.16.jar!/:na]
        at org.apache.catalina.connector.Connector.startInternal(Connector.java:1043) ~[tomcat-embed-core-10.1.16.jar!/:na]
        ... 26 common frames omitted

ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ sudo lsof -i:80
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ sudo kill <PID>
-bash: syntax error near unexpected token `newline'
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ cd ~/aws-elb-express
-bash: cd: /home/ubuntu/aws-elb-express: No such file or directory
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ sudo java -jar build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jar

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.2.0)

2026-11-10T06:37:41.726Z  INFO 3084 --- [           main] c.e.a.AwsElbSpringbootApplication        : Starting AwsElbSpringbootApplication v0.0.1-SNAPSHOT using Java 17.0.20.1 with PID 3084 (/home/ubuntu/aws-elb-springboot/build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jar started by root in /home/ubuntu/aws-elb-springboot)
2026-11-10T06:37:41.734Z  INFO 3084 --- [           main] c.e.a.AwsElbSpringbootApplication        : No active profile set, falling back to 1 default profile: "default"
2026-11-10T06:37:43.578Z  INFO 3084 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 80 (http)
2026-11-10T06:37:43.597Z  INFO 3084 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-11-10T06:37:43.598Z  INFO 3084 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.16]
2026-11-10T06:37:43.671Z  INFO 3084 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2026-11-10T06:37:43.683Z  INFO 3084 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1796 ms
2026-11-10T06:37:44.254Z  INFO 3084 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 80 (http) with context path ''
2026-11-10T06:37:44.278Z  INFO 3084 --- [           main] c.e.a.AwsElbSpringbootApplication        : Started AwsElbSpringbootApplication in 3.386 seconds (process running for 4.195)
2026-11-10T06:38:07.762Z  INFO 3084 --- [p-nio-80-exec-2] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2026-11-10T06:38:07.762Z  INFO 3084 --- [p-nio-80-exec-2] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2026-11-10T06:38:07.764Z  INFO 3084 --- [p-nio-80-exec-2] o.s.web.servlet.DispatcherServlet        : Completed initialization in 2 ms
^Cubuntu@ip-172-31-29-191:~/aws-elb-springboot$
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ http://44.216.82.254/health
-bash: http://44.216.82.254/health: No such file or directory
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$ ^C
ubuntu@ip-172-31-29-191:~/aws-elb-springboot$

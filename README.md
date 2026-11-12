# dev-instagram-server-target-group

AWS ELB Spring Boot Application

A simple Spring Boot REST application configured to run on an AWS EC2 instance behind an Elastic Load Balancer (ELB), responding to health checks.

🚀 Project Overview

Framework: Spring Boot 3.2.0

Language: Java 17

Build Tool: Gradle

Server Port: 80 (Standard HTTP port)

📂 Project Structure

aws-elb-springboot/
├── build.gradle
├── settings.gradle
├── gradlew
├── src/
│   └── main/
│       ├── java/com/example/awselbspringboot/
│       │   ├── AppController.java
│       │   └── AwsElbSpringbootApplication.java
│       └── resources/
│           └── application.yml


🛠️ Controller Implementation

The application exposes a simple health-check endpoint via AppController.java:

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


📦 Building the Application

To build the executable JAR file without running tests, execute the Gradle wrapper:

./gradlew clean build -x test


The resulting JAR file will be located at:
build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jar

▶️ Running the Application

Since the application is configured to listen on Port 80, standard users on Linux do not have permission to bind to privileged ports below 1024. Therefore, you must run the JAR file with root privileges (sudo):

sudo java -jar build/libs/aws-elb-springboot-0.0.1-SNAPSHOT.jar


🔍 Testing the Endpoint

You can test the health check endpoint directly from your instance using curl or by visiting the public IP/Domain in your browser:

curl http://localhost/health


Expected Response:

Success Health Check

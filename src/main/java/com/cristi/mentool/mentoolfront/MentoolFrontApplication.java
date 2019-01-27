package com.cristi.mentool.mentoolfront;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MentoolFrontApplication {

	public static void main(String[] args) {
		SpringApplication.run(MentoolFrontApplication.class, args);
	}

}


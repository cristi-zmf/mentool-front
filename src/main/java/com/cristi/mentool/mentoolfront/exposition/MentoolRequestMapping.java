package com.cristi.mentool.mentoolfront.exposition;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api")
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface MentoolRequestMapping {
}

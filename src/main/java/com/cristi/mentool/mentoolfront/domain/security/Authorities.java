package com.cristi.mentool.mentoolfront.domain.security;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface Authorities extends UserDetailsService {
    Authority add(Authority authority);
}

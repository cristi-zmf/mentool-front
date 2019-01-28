package com.cristi.mentool.mentoolfront.exposition.authority;

import com.cristi.mentool.mentoolfront.domain.security.Authorities;
import com.cristi.mentool.mentoolfront.exposition.MentoolRequestMapping;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Set;

import static java.util.stream.Collectors.toSet;

@MentoolRequestMapping
public class AuthorityResource {

    private Authorities authorities;

    public AuthorityResource(Authorities authorities) {
        this.authorities = authorities;
    }

    @GetMapping(value = "/authorities")
    public Set<AuthorityDto> getAuthorities() throws AuthenticationException {
        return authorities.findAll().stream()
                .map(AuthorityDto::new)
                .collect(toSet());
    }

}

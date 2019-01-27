package com.cristi.mentool.mentoolfront.infra.persistence;

import com.cristi.mentool.mentoolfront.domain.EmailAddress;
import com.cristi.mentool.mentoolfront.domain.security.Authorities;
import com.cristi.mentool.mentoolfront.domain.security.Authority;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

@Repository(value = "userService")
@Primary
public class SdjAuthorities implements Authorities {
    private final AuthoritiesSdj sdj;


    public SdjAuthorities(AuthoritiesSdj sdj) {
        this.sdj = sdj;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return sdj.getOne(new EmailAddress(username));
    }

    @Override
    public Authority add(Authority authority) {
        return sdj.saveAndFlush(authority);
    }
}

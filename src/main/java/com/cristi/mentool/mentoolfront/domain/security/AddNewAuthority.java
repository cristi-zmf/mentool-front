package com.cristi.mentool.mentoolfront.domain.security;

import com.cristi.mentool.mentoolfront.domain.UniqueId;
import com.cristi.mentool.mentoolfront.exposition.AuthorityCreateCommand;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AddNewAuthority {
    private final Authorities authorities;
    private final BCryptPasswordEncoder bcryptEncoder;

    public AddNewAuthority(Authorities authorities, BCryptPasswordEncoder bcryptEncoder) {
        this.authorities = authorities;
        this.bcryptEncoder = bcryptEncoder;
    }

    public Authority addAuthorityFor(AuthorityCreateCommand command) {
        String passwordHash = bcryptEncoder.encode(command.password);
        Authority newAuthority = new Authority(
                command.username, command.role, passwordHash
        );

        return authorities.add(newAuthority);
    }
}

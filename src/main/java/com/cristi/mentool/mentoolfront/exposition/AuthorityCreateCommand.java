package com.cristi.mentool.mentoolfront.exposition;

import com.cristi.mentool.mentoolfront.domain.EmailAddress;
import com.cristi.mentool.mentoolfront.domain.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class AuthorityCreateCommand {
    @JsonProperty
    public EmailAddress username;
    @JsonProperty
    public Role role;
    @JsonProperty
    public String password;
}

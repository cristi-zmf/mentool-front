package com.cristi.mentool.mentoolfront.exposition;

import com.cristi.mentool.mentoolfront.domain.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AuthorityCreateCommand {
    @JsonProperty
    public String username;
    @JsonProperty
    public Role role;
    @JsonProperty
    public String password;
}

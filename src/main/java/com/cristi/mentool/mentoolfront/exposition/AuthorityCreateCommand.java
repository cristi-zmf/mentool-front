package com.cristi.mentool.mentoolfront.exposition;

import com.cristi.mentool.mentoolfront.domain.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class AuthorityCreateCommand {
    @JsonProperty
    @NotEmpty
    public String username;
    @JsonProperty
    @NotNull
    public Role role;
    @JsonProperty
    @NotEmpty
    public String password;
}

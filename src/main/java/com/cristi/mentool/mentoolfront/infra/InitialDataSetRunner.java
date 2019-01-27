package com.cristi.mentool.mentoolfront.infra;

import com.cristi.mentool.mentoolfront.domain.EmailAddress;
import com.cristi.mentool.mentoolfront.domain.Role;
import com.cristi.mentool.mentoolfront.domain.security.AddNewAuthority;
import com.cristi.mentool.mentoolfront.exposition.AuthorityCreateCommand;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

import static com.cristi.mentool.mentoolfront.domain.RomanianDateTimeFormatter.ROMANIAN_FORMATTER;

@Component
public class InitialDataSetRunner implements ApplicationRunner {
    private static final LocalDateTime START_TIME = LocalDateTime.parse("13.01.2018 23:43", ROMANIAN_FORMATTER);
    private static final LocalDateTime END_TIME = LocalDateTime.parse("28.01.2018 23:43", ROMANIAN_FORMATTER);

    private final AddNewAuthority addNewAuthority;

    public InitialDataSetRunner(AddNewAuthority addNewAuthority) {
        this.addNewAuthority = addNewAuthority;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        AuthorityCreateCommand command = new AuthorityCreateCommand();
        command.username = new EmailAddress("cristi@cristi.com");
        command.role = Role.ADMIN;
        command.password = "cristi";
        addNewAuthority.addAuthorityFor(command);
    }
}

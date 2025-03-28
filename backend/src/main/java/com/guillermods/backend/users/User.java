package com.guillermods.backend.users;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("USERS")
public class User {

    @Id
    private String email;

    private String username;

    private String firstName;

    private String lastName;

    private LocalDateTime createdTs;

    private LocalDateTime updatedTs;

    private LocalDateTime deletedTs;

    private boolean active;
}

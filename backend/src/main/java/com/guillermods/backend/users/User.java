package com.guillermods.backend.users;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table( name = "users")
public class User {

    @Id
    @Column("email")
    private String email;

    @Column("username")
    private String username;

    @Column("first_name")
    private String firstName;

    @Column("last_name")
    private String lastName;

    @Column("created_ts")
    private LocalDateTime createdTs;

    @Column("updated_ts")
    private LocalDateTime updatedTs;

    @Column("deleted_ts")
    private LocalDateTime deletedTs;

    @Column("active")
    private boolean active;
}

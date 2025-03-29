package com.guillermods.backend.users;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Validated
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<Page<User>> getUsers(
            @RequestParam(defaultValue = "0")  Integer pageNumber,
            @RequestParam(defaultValue = "100")  Integer pageSize,
            @RequestParam(defaultValue = "email") String sortField,
            @RequestParam(defaultValue = "desc") String sortOrder) {

        Sort sort;
        if ("asc".equalsIgnoreCase(sortOrder)) {
            sort = Sort.by(sortField).ascending();
        } else if ("desc".equalsIgnoreCase(sortOrder)) {
            sort = Sort.by(sortField).descending();
        } else {
            sort = Sort.by(sortField).descending();
        }

        Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
        Page<User> users = userRepository.findAll(pageable);
        return ResponseEntity.ok(users);
    }
}

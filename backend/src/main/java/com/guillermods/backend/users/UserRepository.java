package com.guillermods.backend.users;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends PagingAndSortingRepository<User, String> {

    @Query("""
            SELECT *
            FROM users u
            ORDER BY u.:sortField :sortOrder
            LIMIT :pageSize
            OFFSET :pageNumber
            """)
    List<User> findByPage(
            @Param("pageNumber") int pageNumber,
            @Param("pageSize") int pageSize,
            @Param("sortField") String sortField,
            @Param("sortOrder") String sortOrder);


}

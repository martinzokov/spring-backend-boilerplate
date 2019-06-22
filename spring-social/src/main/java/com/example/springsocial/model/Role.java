package com.example.springsocial.model;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Role implements GrantedAuthority {

    @Id
    private String id;

    @ManyToMany(mappedBy = "roles")
    private List<User> userList;

    @Override
    public String getAuthority() {
        return id;
    }
}

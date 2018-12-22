package cz.cvut.sin.dashboard.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2018-12-19
 */
@Entity
@Table(name = "dashboard_user")
public class DashboardUser {

    @Id
    @GeneratedValue(generator = "increment")
    @SequenceGenerator(name = "increment", sequenceName = "user_id_sequence")
    private Long id;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String password;

    public DashboardUser() {
    }

    public DashboardUser(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
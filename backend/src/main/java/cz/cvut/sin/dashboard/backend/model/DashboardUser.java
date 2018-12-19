package cz.cvut.sin.dashboard.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

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
    private Long id;
    @Column
    private String name;

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
}
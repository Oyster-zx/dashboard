package cz.cvut.sin.dashboard.backend.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cz.cvut.sin.dashboard.backend.model.DashboardUser;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2018-12-21
 */
@Repository
public interface UserRepository extends CrudRepository<DashboardUser, Long>{
}
package cz.cvut.sin.dashboard.backend.dao;

import cz.cvut.sin.dashboard.backend.model.Dashboard;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DashboardRepository extends CrudRepository<Dashboard, Long> {

    //@Query("SELECT d FROM Dashboard d WHERE d.user.id=:user_id")
    //Dashboard findDashboardByUserId(@Param("user_id") Long userId);
    Dashboard findDashboardByUserId(Long userId);

    Dashboard findDashboardByUserNameAndUserPassword(String userName, String password);
}

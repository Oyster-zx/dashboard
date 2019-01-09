package cz.cvut.sin.dashboard.backend.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cz.cvut.sin.dashboard.backend.model.DayCounter;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2019-01-09
 */
@Repository
public interface DayCounterRepository extends CrudRepository<DayCounter, Long>{
}
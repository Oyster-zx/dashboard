package cz.cvut.sin.dashboard.backend.service;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2018-12-21
 */
public interface UserService {

    boolean register(String name, String email, String password);
}
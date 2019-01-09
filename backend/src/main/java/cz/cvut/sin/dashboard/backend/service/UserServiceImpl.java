package cz.cvut.sin.dashboard.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cz.cvut.sin.dashboard.backend.dao.UserRepository;
import cz.cvut.sin.dashboard.backend.model.User;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2018-12-21
 */
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;


    @Override
    public boolean register(String name, String email, String password) {
        User user = new User(name, email, password);
        userRepository.save(user);
        return true;
    }

    private String hash(String password){
        throw new NotImplementedException();
    }
}
package cz.cvut.sin.dashboard.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import cz.cvut.sin.dashboard.backend.service.UserService;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2018-12-23
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("createUser")
    public String createUser() {
        userService.register("DummyUserName", "dummy@mail.com", "dummypassword");
        return "OK";
    }
}
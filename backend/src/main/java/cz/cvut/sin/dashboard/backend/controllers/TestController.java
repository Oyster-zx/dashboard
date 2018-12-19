package cz.cvut.sin.dashboard.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2018-12-19
 */
@RestController
public class TestController {

    @GetMapping("/dummy")
    public String dummy(){
        return "Dummy response";
    }

}
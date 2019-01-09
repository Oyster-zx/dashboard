package cz.cvut.sin.dashboard.backend.controllers;

import cz.cvut.sin.dashboard.backend.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/dummy")
    public String dummy() {
        System.out.println(dashboardService.getDashboard("TestName", "TestPassword"));
        return "Dummy response";
    }
}
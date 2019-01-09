package cz.cvut.sin.dashboard.backend.controllers;

import cz.cvut.sin.dashboard.backend.dto.DashboardDto;
import cz.cvut.sin.dashboard.backend.dto.DayCounterDto;
import cz.cvut.sin.dashboard.backend.dto.NoteDto;
import cz.cvut.sin.dashboard.backend.model.Dashboard;
import cz.cvut.sin.dashboard.backend.model.DayCounter;
import cz.cvut.sin.dashboard.backend.model.Note;
import cz.cvut.sin.dashboard.backend.service.DashboardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;
import java.util.logging.Logger;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DashboardController {

    private static Logger logger = Logger.getLogger(DashboardController.class.getName());

    @Autowired
    private DashboardService dashboardService;

    @ResponseBody
    @PostMapping(path = "/dashboard/read", produces = { MediaType.APPLICATION_JSON_VALUE })
    public DashboardDto getDashboard(@RequestBody Map<String, Object> payload) {
        String userName = (String) payload.get("user_name");
        String password = (String) payload.get("password");
        logger.info(userName + " read dashboard");
        Dashboard dashboard = dashboardService.getDashboard(userName, password);
        return DashboardDto.fromEntity(dashboard);
    }

    @ResponseBody
    @PostMapping(path = "/dashboard/addNote", produces = { MediaType.APPLICATION_JSON_VALUE })
    public NoteDto addNote(@RequestBody Map<String, Object> payload) {
        String userName = (String) payload.get("user_name");
        String password = (String) payload.get("password");
        String text = (String) payload.get("text");
        logger.info(userName + " added note");
        Dashboard dashboard = dashboardService.getDashboard(userName, password);
        Note note = dashboardService.addNote(dashboard, text);
        return NoteDto.fromEntity(note);
    }

    @ResponseBody
    @PostMapping(path = "/dashboard/removeNote", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity removeNote(@RequestBody Map<String, Object> payload) {
        String userName = (String) payload.get("user_name");
        String password = (String) payload.get("password");
        Long noteId = Long.parseLong((String) payload.get("id"));
        logger.info(userName + " removed note " + noteId);
        dashboardService.removeNote(noteId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping(path = "/dashboard/addCounter", produces = { MediaType.APPLICATION_JSON_VALUE })
    public DayCounterDto addDayCounter(@RequestBody Map<String, Object> payload) {
        String userName = (String) payload.get("user_name");
        String password = (String) payload.get("password");
        String title = (String) payload.get("title");
        Date date = new Date(Date.parse((String) payload.get("date")));
        logger.info(userName + " added day counter");
        Dashboard dashboard = dashboardService.getDashboard(userName, password);
        DayCounter dayCounter = dashboardService.addDayCounter(dashboard, title, date);
        return DayCounterDto.fromEntity(dayCounter);
    }

    @ResponseBody
    @PostMapping(path = "/dashboard/removeCounter", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity removeDayCounter(@RequestBody Map<String, Object> payload) {
        String userName = (String) payload.get("user_name");
        String password = (String) payload.get("password");
        Long dayCounterId = Long.parseLong((String) payload.get("id"));
        logger.info(userName + " removed day counter " + dayCounterId);
        dashboardService.removeDayCounter(dayCounterId);
        return new ResponseEntity(HttpStatus.OK);
    }
}

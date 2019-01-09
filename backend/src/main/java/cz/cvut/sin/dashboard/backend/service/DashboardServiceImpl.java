package cz.cvut.sin.dashboard.backend.service;

import cz.cvut.sin.dashboard.backend.dao.DashboardRepository;
import cz.cvut.sin.dashboard.backend.dao.DayCounterRepository;
import cz.cvut.sin.dashboard.backend.dao.NoteRepository;
import cz.cvut.sin.dashboard.backend.model.Dashboard;
import cz.cvut.sin.dashboard.backend.model.DayCounter;
import cz.cvut.sin.dashboard.backend.model.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.logging.Logger;

@Service
public class DashboardServiceImpl implements DashboardService{

    private static Logger logger = Logger.getLogger(DashboardServiceImpl.class.getName());

    @Autowired
    private DashboardRepository dashboardRepository;

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private DayCounterRepository dayCounterRepository;

    @Override
    public Dashboard getDashboard(String userName, String userPassword) {
        return dashboardRepository.findDashboardByUserNameAndUserPassword(userName, userPassword);
    }

    @Override
    public Note addNote(Dashboard dashboard, String text) {
        Note note = new Note();
        note.setText(text);
        dashboard.addNote(note);
        noteRepository.save(note);
        return note;
    }

    @Override
    public void removeNote(Long noteId) {
        try {
            noteRepository.deleteById(noteId);
        }catch (EmptyResultDataAccessException e){
            logger.info(e.getLocalizedMessage());
        }
    }

    @Override
    public DayCounter addDayCounter(Dashboard dashboard, String title, Date date) {
        DayCounter dayCounter = new DayCounter();
        dayCounter.setTitle(title);
        dayCounter.setDate(date);
        dashboard.addDayCounter(dayCounter);
        dayCounterRepository.save(dayCounter);
        return dayCounter;
    }

    @Override
    public void removeDayCounter(Long dayCounterId) {
        try {
            dayCounterRepository.deleteById(dayCounterId);
        }catch (EmptyResultDataAccessException e){
            logger.info(e.getLocalizedMessage());
        }
    }

}

package cz.cvut.sin.dashboard.backend.service;

import cz.cvut.sin.dashboard.backend.model.Dashboard;
import cz.cvut.sin.dashboard.backend.model.Note;

public interface DashboardService {

    Dashboard getDashboard(String userName, String userPassword);

    Note addNote(Dashboard dashboard, String text);

    void removeNote(Long noteId);
}

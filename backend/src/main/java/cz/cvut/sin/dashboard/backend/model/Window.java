package cz.cvut.sin.dashboard.backend.model;

import javax.persistence.*;

import java.util.Iterator;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Table(name = "db_window")
public class Window {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "dashboard_id")
    private Dashboard dashboard;

    @OneToMany(mappedBy = "window", cascade = CascadeType.ALL)
    private Set<Note> notes;

    @OneToMany(mappedBy = "window", cascade = CascadeType.ALL)
    private Set<DayCounter> dayCounters;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Dashboard getDashboard() {
        return dashboard;
    }

    public void setDashboard(Dashboard dashboard) {
        this.dashboard = dashboard;
    }

    public Set<Note> getNotes() {
        return notes;
    }

    public void addNote(Note note) {
        note.setWindow(this);
        notes.add(note);
    }

    public void addDayCounter(DayCounter dayCounter) {
        dayCounter.setWindow(this);
        dayCounters.add(dayCounter);
    }

    public void removeNote(Long noteId) {
        notes = notes.stream().filter(note -> !note.getId().equals(noteId)).collect(Collectors.toSet());
    }

    public void removeDayCounter(Long dayCounterId) {
        dayCounters = dayCounters.stream().filter(dayCounter -> !dayCounter.getId().equals(dayCounterId)).collect(Collectors.toSet());
    }

    public void setNotes(Set<Note> notes) {
        this.notes = notes;
    }

    public Set<DayCounter> getDayCounters() {
        return dayCounters;
    }

    public void setDayCounters(Set<DayCounter> dayCounters) {
        this.dayCounters = dayCounters;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Window window = (Window) o;
        return Objects.equals(id, window.id) &&
                Objects.equals(dashboard, window.dashboard);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dashboard);
    }
}

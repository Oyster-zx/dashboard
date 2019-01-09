package cz.cvut.sin.dashboard.backend.model;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "dashboard")
public class Dashboard {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "dashboard", cascade = CascadeType.ALL)
    private Set<Window> windows;

    @JoinColumn(name = "user_id")
    @OneToOne
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Window> getWindows() {
        return windows;
    }

    public void setWindows(Set<Window> windows) {
        this.windows = windows;
    }

    public void addNote(Note note){
        getWindows().iterator().next().addNote(note);
    }

    public void removeNote(Long noteId){
        getWindows().iterator().next().removeNote(noteId);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dashboard dashboard = (Dashboard) o;
        return Objects.equals(id, dashboard.id) &&
                Objects.equals(user, dashboard.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user);
    }
}

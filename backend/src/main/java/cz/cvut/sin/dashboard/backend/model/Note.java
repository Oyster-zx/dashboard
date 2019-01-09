package cz.cvut.sin.dashboard.backend.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "note")
@SequenceGenerator(name="note_id_seq", initialValue=100, allocationSize=100)
public class Note extends Widget {

    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="note_id_seq")
    private Long id;

    @Column(name = "text")
    private String text;

    @ManyToOne
    @JoinColumn(name = "window_id")
    private Window window;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Window getWindow() {
        return window;
    }

    public void setWindow(Window window) {
        this.window = window;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Note note = (Note) o;
        return Objects.equals(id, note.id) &&
                Objects.equals(text, note.text) &&
                Objects.equals(window, note.window);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id, text, window);
    }
}

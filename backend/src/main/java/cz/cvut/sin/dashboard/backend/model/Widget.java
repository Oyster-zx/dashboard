package cz.cvut.sin.dashboard.backend.model;

import javax.persistence.*;
import java.util.Objects;

@MappedSuperclass
public class Widget {

    @Column(name = "archived")
    private boolean archived;

    @Column(name = "title")
    private String title;

    @Column(name = "theme")
    private String theme;

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Widget widget = (Widget) o;
        return archived == widget.archived &&
                Objects.equals(title, widget.title) &&
                Objects.equals(theme, widget.theme);
    }

    @Override
    public int hashCode() {
        return Objects.hash(archived, title, theme);
    }
}

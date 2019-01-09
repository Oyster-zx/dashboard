package cz.cvut.sin.dashboard.backend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2019-01-09
 */
@Entity
@Table(name = "day_counter")
@SequenceGenerator(name="day_counter_id_seq", initialValue=100, allocationSize=100)
public class DayCounter extends Widget {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "day_counter_id_seq")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "window_id")
    private Window window;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Window getWindow() {
        return window;
    }

    public void setWindow(Window window) {
        this.window = window;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        if (!super.equals(o))
            return false;

        DayCounter that = (DayCounter) o;

        if (id != null ? !id.equals(that.id) : that.id != null)
            return false;
        if (title != null ? !title.equals(that.title) : that.title != null)
            return false;
        if (date != null ? !date.equals(that.date) : that.date != null)
            return false;
        return window != null ? window.equals(that.window) : that.window == null;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (id != null ? id.hashCode() : 0);
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (window != null ? window.hashCode() : 0);
        return result;
    }
}
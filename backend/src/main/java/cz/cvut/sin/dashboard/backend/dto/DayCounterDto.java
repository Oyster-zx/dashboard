package cz.cvut.sin.dashboard.backend.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

import cz.cvut.sin.dashboard.backend.model.DayCounter;
import cz.cvut.sin.dashboard.backend.model.Note;

/**
 * TODO ikuzevanov popis
 *
 * <br>Historie: <br>
 * {{SVN-LOG}}
 * @author ikuzevanov on 2019-01-09
 */
public class DayCounterDto {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("date")
    private Date date;

    public static DayCounterDto fromEntity(DayCounter dayCounter){

        DayCounterDto dto = new DayCounterDto();
        dto.setId(dayCounter.getId());
        dto.setTitle(dayCounter.getTitle());
        dto.setDate(dayCounter.getDate());
        return dto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
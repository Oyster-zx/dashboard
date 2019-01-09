package cz.cvut.sin.dashboard.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import cz.cvut.sin.dashboard.backend.model.Window;

import java.util.Set;
import java.util.stream.Collectors;

public class WindowDto {

    @JsonProperty("notes")
    private Set<NoteDto> notes;

    @JsonProperty("counters")
    private Set<DayCounterDto> dayCounters;


    public static WindowDto fromEntity(Window window){

        WindowDto dto = new WindowDto();
        dto.setNotes(window.getNotes().stream().map(NoteDto::fromEntity).collect(Collectors.toSet()));
        dto.setDayCounters(window.getDayCounters().stream().map(DayCounterDto::fromEntity).collect(Collectors.toSet()));
        return dto;
    }

    public Set<NoteDto> getNotes() {
        return notes;
    }

    public void setNotes(Set<NoteDto> notes) {
        this.notes = notes;
    }

    public Set<DayCounterDto> getDayCounters() {
        return dayCounters;
    }

    public void setDayCounters(Set<DayCounterDto> dayCounters) {
        this.dayCounters = dayCounters;
    }
}

package cz.cvut.sin.dashboard.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import cz.cvut.sin.dashboard.backend.model.Note;

public class NoteDto {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("text")
    private String text;

    public static NoteDto fromEntity(Note note){

        NoteDto dto = new NoteDto();
        dto.setId(note.getId());
        dto.setText(note.getText());
        return dto;
    }

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
}

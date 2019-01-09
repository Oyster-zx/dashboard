package cz.cvut.sin.dashboard.backend.dao;

import cz.cvut.sin.dashboard.backend.model.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, Long> {
}

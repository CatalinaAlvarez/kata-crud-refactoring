package co.com.sofka.crud.Repositories;

import co.com.sofka.crud.Models.TaskList;
import org.springframework.data.repository.CrudRepository;

public interface TaskListRepository extends CrudRepository<TaskList, Long> {
}

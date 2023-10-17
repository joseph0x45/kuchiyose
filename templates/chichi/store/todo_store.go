package store

import "app/models"

type TodoStore interface {
	Insert(todo *models.Todo) error
	//More here
}

type Todos struct{}

func (store *Todos) Insert(todo *models.Todo) error {
	_, err := sql.NamedExec(
		"insert into todos(id, label, done) values(:id, :label, :done)",
		todo,
	)
	return err
}

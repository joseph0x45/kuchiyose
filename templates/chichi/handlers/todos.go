package handlers

import (
	"app/pkg"
	"net/http"
)

type todo_handler struct {}

var TodoHandler = new(todo_handler)

func (s *todo_handler) CreateTodo(w http.ResponseWriter, r *http.Request){
  //Handle todo creation
  pkg.Logger.Info("Use logger here")

}

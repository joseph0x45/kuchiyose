package main

import (
	"app/handlers"
	"app/pkg"
	"app/store"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func main() {
	pkg.Init()
	err := store.ConnectToSQL()
	if err != nil {
		panic(err)
	}
	r := chi.NewRouter()

	r.Post("/todos", handlers.TodoHandler.CreateTodo)

	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}

}

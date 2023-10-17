package models

type Todo struct {
	Id    string `json:"id" db:"id"`
	Label string `json:"label" db:"label"`
	Done  bool   `json:"done" db:"done"`
}

package store

import (
	"os"

	"github.com/jmoiron/sqlx"
)

var sql *sqlx.DB

func ConnectToSQL() (err error) {
  sql, err = sqlx.Open("postgres", os.Getenv("DB_URL"))
  return err
}

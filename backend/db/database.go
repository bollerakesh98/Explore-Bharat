package db

import (
	"database/sql"
	"log"

	_ "modernc.org/sqlite"
)

var DB *sql.DB

func Connect() {
	var err error
	DB, err = sql.Open("sqlite", "./explore_bharat.db")
	if err != nil {
		log.Fatal(err)
	}

	createTable()
}

func createTable() {
	query := `
	CREATE TABLE IF NOT EXISTS destinations (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
		state TEXT,
		description TEXT,
		interest TEXT,
		budget INTEGER,
		days INTEGER,
		best_time TEXT,
		language TEXT,
		culture TEXT,
		is_hidden BOOLEAN
	);
	`

	_, err := DB.Exec(query)
	if err != nil {
		log.Fatal(err)
	}
}

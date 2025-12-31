package main

import (
	"explore-bharat-backend/db"
	router "explore-bharat-backend/routers"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	db.Init()
	// data.SeedHiddenGems()

	r := router.Setup()
	log.Println("Server running on :8080")
	r.Run(":8080")
}

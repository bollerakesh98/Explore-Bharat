package main

import (
	"net/http"

	"explore-bharat-backend/db"
	"explore-bharat-backend/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	db.Connect()

	r := gin.Default()

	r.Use(cors.Default())

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Explore Bharat backend + DB running 🚀",
		})
	})
	r.GET("/seed", handlers.SeedDestinations)
	r.GET("/api/destinations", handlers.GetDestinations)
	r.GET("/api/hidden-gems", handlers.GetHiddenGems)

	r.Run(":8080")
}

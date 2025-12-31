package handlers

import (
	"explore-bharat-backend/db"
	"explore-bharat-backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetDestinations(c *gin.Context) {
	rows, err := db.DB.Query("SELECT id, name, category, budget, lat, lng, image FROM destinations")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var dests []models.Destination
	for rows.Next() {
		var d models.Destination
		err := rows.Scan(&d.ID, &d.Name, &d.Category, &d.Budget, &d.Lat, &d.Lng, &d.Image)
		if err != nil {
			continue
		}
		dests = append(dests, d)
	}

	c.JSON(http.StatusOK, dests)
}

package handlers

import (
	"explore-bharat-backend/db"
	"explore-bharat-backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// SeedDestinations adds sample destinations to the database
func SeedDestinations(c *gin.Context) {
	query := `
	INSERT INTO destinations 
	(name, state, description, interest, budget, days, best_time, language, culture, is_hidden)
	VALUES 
	('Rishikesh', 'Uttarakhand', 'Spiritual town on Ganges', 'spiritual', 1500, 3, 'Oct-Mar', 'Hindi', 'Yoga & Ashrams', false),
	('Ziro Valley', 'Arunachal Pradesh', 'Hidden valley with tribal culture', 'nature', 2000, 4, 'Mar-Oct', 'Apatani', 'Tribal lifestyle', true),
	('Gokarna', 'Karnataka', 'Peaceful beach town', 'beach', 1800, 3, 'Oct-Feb', 'Kannada', 'Temple & beach culture', false);
	`

	_, err := db.DB.Exec(query)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Sample destinations added"})
}

// GetDestinations retrieves all destinations from the database
func GetDestinations(c *gin.Context) {
	interest := c.Query("interest")
	maxBudget := c.Query("budget")
	maxDays := c.Query("days")

	query := "SELECT * FROM destinations WHERE 1=1"
	args := []interface{}{}

	if interest != "" {
		query += " AND interest = ?"
		args = append(args, interest)
	}

	if maxBudget != "" {
		query += " AND budget <= ?"
		args = append(args, maxBudget)
	}

	if maxDays != "" {
		query += " AND days <= ?"
		args = append(args, maxDays)
	}

	rows, err := db.DB.Query(query, args...)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	destinations := []models.Destination{}

	for rows.Next() {
		var d models.Destination
		err := rows.Scan(
			&d.ID,
			&d.Name,
			&d.State,
			&d.Description,
			&d.Interest,
			&d.Budget,
			&d.Days,
			&d.BestTime,
			&d.Language,
			&d.Culture,
			&d.IsHidden,
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		destinations = append(destinations, d)
	}

	c.JSON(http.StatusOK, destinations)
}

// GetHiddenGems retrieves all hidden gem destinations from the database
func GetHiddenGems(c *gin.Context) {
	rows, err := db.DB.Query("SELECT * FROM destinations WHERE is_hidden = 1")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	destinations := []models.Destination{}

	for rows.Next() {
		var d models.Destination
		err := rows.Scan(
			&d.ID,
			&d.Name,
			&d.State,
			&d.Description,
			&d.Interest,
			&d.Budget,
			&d.Days,
			&d.BestTime,
			&d.Language,
			&d.Culture,
			&d.IsHidden,
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		destinations = append(destinations, d)
	}

	c.JSON(http.StatusOK, destinations)
}

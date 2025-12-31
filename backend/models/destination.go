package models

type Destination struct {
	ID          int     `json:"id"`
	Name        string  `json:"name"`
	Category    string  `json:"category"`
	Budget      int     `json:"budget"`
	Lat         float64 `json:"lat"`
	Lng         float64 `json:"lng"`
	Image       string  `json:"image"`
	Description string  `json:"description,omitempty"`
	Distance    float64 `json:"distance,omitempty"` // calculated dynamically
}

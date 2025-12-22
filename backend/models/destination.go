package models

type Destination struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	State       string `json:"state"`
	Description string `json:"description"`
	Interest    string `json:"interest"`
	Budget      int    `json:"budget"`
	Days        int    `json:"days"`
	BestTime    string `json:"best_time"`
	Language    string `json:"language"`
	Culture     string `json:"culture"`
	IsHidden    bool   `json:"is_hidden"`
}

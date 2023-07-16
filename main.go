package main

import (
    "net/http"
)

// Take in a post request from the user, and log the string. If password matches
// plain text of file line 1, then return file line 2 onwards
func whats_the_password() {
}

func handler_index(w http.ResponseWriter, r *http.Request) {
  http.ServeFile(w, r, "static/index.html")
}

func handler_rw(w http.ResponseWriter, r *http.Request) {
  http.ServeFile(w, r, "static/red_wing.pdf")
}


func main() {
    http.HandleFunc("/", handler_index)
    http.HandleFunc("/red_wing.pdf", handler_rw)
    http.ListenAndServe(":8001", nil)
}

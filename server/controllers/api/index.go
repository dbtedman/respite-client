package api

import (
	"fmt"
	"net/http"
)

func HandleIndexAction(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(fmt.Sprintf(`{}`)))
}

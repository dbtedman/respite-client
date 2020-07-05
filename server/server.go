package server

import (
	"github.com/dbtedman/respite/server/controllers/api"
	"github.com/dbtedman/respite/server/controllers/client"
	"github.com/dbtedman/respite/server/gateways/logger"
	"github.com/gorilla/mux"
	"net/http"
)

// https://dev.to/moficodes/build-your-first-rest-api-with-go-2gcj

func Start() {
	logger.ConfigureLogging()

	routes := mux.NewRouter()
	routes.HandleFunc("/api/", api.HandleIndexAction).Methods(http.MethodGet)
	routes.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", http.FileServer(http.Dir("dist/assets"))))
	routes.PathPrefix("/").HandlerFunc(client.HandleAllAction).Methods(http.MethodGet)

	routes.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// TODO: Inject our gateways here.
		client.HandleAllAction(w, r)
	}).Methods(http.MethodGet)

	port := ":9000"

	logger.InfoFormat("Listening http://localhost%s", port)
	logger.ErrorLine(http.ListenAndServe(port, routes))
}

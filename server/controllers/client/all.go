package client

import (
	"github.com/dbtedman/respite/server/gateways/logger"
	"io/ioutil"
	"net/http"
)

func HandleAllAction(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadFile("./dist/index.html")

	if err != nil {
		logger.ErrorFormat("Could not load file %s", err)
	}

	w.Header().Set("Content-Security-Policy-Report-Only", "frame-src 'self'")

	w.Write(data)
}

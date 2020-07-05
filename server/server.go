package server

import "github.com/dbtedman/respite/server/gateways/logger"

func Start() {
	logger.ConfigureLogging()
	logger.InfoFormat("Hello, World!")
}

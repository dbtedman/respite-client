package main

import (
	"github.com/dbtedman/respite/port/command"
	"os"
)

func main() {
	cmd := command.Main{}
	os.Exit(cmd.Run(os.Args[1:]))
}

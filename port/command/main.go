package command

import "fmt"

const exitOk = 0

type Main struct {
}

func (mc *Main) Run(args []string) int {
	fmt.Printf("respite %v", args)
	return exitOk
}

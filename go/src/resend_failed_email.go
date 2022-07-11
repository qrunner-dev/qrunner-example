package main

import (
	"fmt"
	"os"

	"github.com/sirupsen/logrus"
)

func main() {
	logrus.Info("Logged Here")
	fmt.Println("WE'RE THE CHAMPION")

	args := os.Args
	if len(args) > 1 {
		fmt.Println("Received Arguments: Option#1", args[1:])
		fmt.Println("Received Arguments: Option#2", os.Getenv("QRUNNER_SCRIPT_ARGS"))
	}

}

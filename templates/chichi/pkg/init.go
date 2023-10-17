package pkg

import "github.com/sirupsen/logrus"

func Init() {
	Logger = logrus.New()
	Logger.SetReportCaller(true)
}

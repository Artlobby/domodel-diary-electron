const { app, BrowserWindow } = require('electron')

app.whenReady().then(function() {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	})

	// win.removeMenu()
	win.show()

	win.loadFile('lib/domodel-diary/index.html')
})
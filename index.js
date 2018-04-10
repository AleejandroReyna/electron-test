//important const

//app: gestor app
//browser window: app frontend
const {app, BrowserWindow} = require('electron')

//when app is charged
app.on('ready', () => {
  //create a window and run app

  let win = new BrowserWindow({
    width: 300,
    height: 500,
    title: 'hello world',
    center: true,
    maximizable: false
  })

  win.on('move', () => {
    const position = win.getPosition()
    console.log(`la posición: ${position}`)
  })

  win.on('closed', () => {
    win = null
    app.quit()
  })

  win.loadURL(`file://${__dirname}/index.html`)
})
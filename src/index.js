import express from 'express'

const app = express()
const port = 3000
const engine = 'ejs'

app.set('view engine', engine)
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index', {
        engine
    })
})

app.listen(port, () => console.log(`App running on port ${port}, with view engine ${engine}`))
import express from 'express'
import * as eta from 'eta'

const app = express()
const port = 3000
const engine = 'eta'

app.engine(engine, eta.renderFile)
app.set('view engine', engine)
app.set('views', './src/views')

app.get('/', (req, res) => {
    res.render('index', {
        answer: 42
    })
})

app.listen(port, () => console.log(`App running on port ${port}, with view engine ${engine}`))
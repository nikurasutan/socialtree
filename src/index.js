import express from 'express'
import yaml from 'js-yaml'
import fs, { cpSync } from 'node:fs'

console.log('🔧 Configuring socialtree...')

const app = express()
const port = 3000
const engine = 'ejs'

app.set('view engine', engine)
app.set('views', './src/views')
app.use(express.static('src/public'))
app.use(express.static('src/assets'))

app.get('/', (req, res) => {
    let config = yaml.load(fs.readFileSync('config/config.yml'), 'utf8')
    res.render('index', {
        name: config.name,
        filenameProfilePic: config.profilePic ? config.profilePic : 'profilepic.jpg',
        links: config.links
    })
})

app.listen(port, () => console.log(`🚀 Socialtree started on port ${port}, with view engine ${engine}`))
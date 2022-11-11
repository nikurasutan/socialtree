import express from 'express'
import yaml from 'js-yaml'
import fs from 'node:fs'
import * as dotenv from 'dotenv'

console.log('🔧 Configuring socialtree...')

dotenv.config()
const app = express()
const port = process.env.PORT
const engine = 'ejs'

app.set('view engine', engine)
app.set('views', './src/views')
app.use(express.static('src/dist'))
app.use(express.static('assets'))

app.get('/', (req, res) => {
    let config = yaml.load(fs.readFileSync('assets/config/config.yml'), 'utf8')
    res.render('index', {
        name: config.name,
        filenameProfilePic: config.profilePic ? config.profilePic : 'profilepic.jpg',
        summaryText: config.summaryText ? config.summaryText: '',
        links: config.links,
        smallLinks: config.smallLinks,
        theme: config.theme
    })
})

app.listen(port, () => console.log(`🚀 Socialtree started on port ${port}, with view engine ${engine}`))
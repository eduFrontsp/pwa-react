import express from 'express'
import cors from 'cors'
import economy from './economy.json'
import technology from './technology.json'
import world from './world.json'
import packageJSON from './package.json';

const GRUOP_NEWS = {
    economy,
    technology,
    world 
}

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/api', function(req, res){
    res.json({
        economy,
        technology,
        world 
    })
})

app.get('/api/subject', function(req, res){
    const { subject } = req.params
    res.json(GRUOP_NEWS[subject])
})

app.get('/api/subject/:id', function(req, res){
    const { subject, id } = req.params
    const allNews = GRUOP_NEWS[subject]
    const news = allNews.value.find(news => news.id === id)
    res.json(news)
})


app.listen(PORT, function(){
    console.log(`rodando na porta ${PORT} PORT`)
})
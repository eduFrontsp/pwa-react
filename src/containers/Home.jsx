import React, { memo, useEffect, useState} from 'react'
import { Row, Col } from 'antd'
import Economy from './components/Economy'
import Technology from './components/Technology'
import World from './components/World'
import apiFront from '../apiFront'

export const Home = () => {
    
    const [news, setNews] = useState([])
    const [loading, setLoadign] = useState(false)

    const handleNews = (articles) => {
        setLoadign(false)
        setNews({
            world: articles[0]?.value.value,
            economy: articles[1]?.value.value,
            tecnology: articles[2]?.value.value,
        })
    }

    useEffect(() => {
        setLoadign(true)
        Promise.allSettled([
            apiFront.getNews('world'),
            apiFront.getNews('economy'),
            apiFront.getNews('tecnology')
        ])
        .then(handleNews)
    }, [])

    if(loading) return <div>Carregando</div>

  return (
    <div>
        <Row gutter={[16,16]}>
            <Col span={24} md={16}>
                <h2>Mundo</h2>
                <World values={news?.world} />
            </Col>
            <Col span={24} md={8}>
                <h2>Economia</h2>
                <Economy values={news?.economy} />
            </Col>
        </Row>
        <hr />
        <Row gutter={[16,16]}>
            <Col span={24}>
                <h2>Tecnologia</h2>
                <Technology values={news?.technology} />
            </Col>
        </Row>
    </div>
  )
}

export default memo(Home)

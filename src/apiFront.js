const params = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

const URL = "http:localhost:3000/api"

function getNews(subject) {
    return fetch(`${URL}/${subject}`, params)
        .then((response) => response.json())
        .catch((err) => {
            console.error('deu algum erro', err)
        })
}

function getNewsById(subject, id) {
    return fetch(`${URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((err) => {
        console.error('deu algum erro', err)
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getNews,
    getNewsById
}
import axios from 'axios'

const KEY = "AIzaSyDuvM7iNPgc57k-GY7M3rMHyCFrLSboWpg";



export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})




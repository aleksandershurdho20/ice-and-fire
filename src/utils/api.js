import axios from 'axios'

export const getCharacterPage = () => {
    return axios.get("https://www.anapioficeandfire.com/api/characters")
}

export const getHouseFromAllegiances = (url) => {
    return axios.get(url)
}
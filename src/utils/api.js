import axios from 'axios'

export const getCharacterPage = () => {
    return axios.get("https://www.anapioficeandfire.com/api/characters")
}
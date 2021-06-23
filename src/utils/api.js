import axios from 'axios'

export const getCharacterPage = () => {
    return axios.get("https://www.anapioficeandfire.com/api/characters")
}

export const getHouseFromAllegiances = (id) => {
    return axios.get(`https://www.anapioficeandfire.com/api/houses/` + id)
}

export const getCharacterPageByPagination = (page, pageSize) => {
    return axios.get(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`)

}
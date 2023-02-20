import axios from "axios"

const crearUsuario = async (oUsuario) => {

    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}usuarios`, oUsuario)
        const { data } = response
    
        return data
        
    } catch (error) {
        const { data } = error.response
       return data.respuesta
    }
}

export default crearUsuario
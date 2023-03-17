import axios from "axios"

const confirmarCuenta = async (token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}usuarios/confirmar/${token}`)
        const { data } = response
        return data
    } catch (error) {
        const { data } = error.response
        return  data
        
    }
}

export default confirmarCuenta;
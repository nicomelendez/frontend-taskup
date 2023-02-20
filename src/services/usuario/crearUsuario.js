import axios from "axios"
import { Global } from "../../utils/Global"

const crearUsuario = async (oUsuario) => {

    try {
        const response = await axios.post(Global.urlBackend+'usuarios', oUsuario)
        const { data } = response
    
        return data
        
    } catch (error) {
        const { data } = error.response
       return data.respuesta
    }
}

export default crearUsuario
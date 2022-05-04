import axios from "axios"

const api = axios.create({
	baseURL:import.meta.env.VITE_BASE_URL
})

export default{
	get(uri:string){
		return api.get(uri).then(res => res.data)
	}
}
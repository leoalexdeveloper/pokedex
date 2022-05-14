export default class Utils{
	static capsFirstLetter(name:string){
		const capsLetter = name[0].toUpperCase()
		return capsLetter + name.substring(1, name.length)
	}

	static formatTimeStamp(timeStamp:number){
		const date = new Date(timeStamp)
		const day = date.getDate()
		const month = date.getMonth()
		const year  = date.getFullYear()
		const hour = date.getHours()
		const minute = date.getMinutes()
		const second = date.getSeconds()

		return `${day}/${month}/${year} ${hour}:${minute}:${second}`
	}
}

export default class Utils{
	static capsFirstLetter(name:string){
		const capsLetter = name[0].toUpperCase()
		return capsLetter + name.substring(1, name.length-1)
	}
}

import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"

const localPersist = new VuexPersistence({
	storage: window.localStorage
}).plugin

export default createStore({
	state:{

	},
	mutations:{

	},
	actions:{

	},
	modules:{
		pokemons:{
			state:()=>{
				return{
					pokemonList: {}
				}
			},
			mutations:{

			},
			actions:{

			},
			getters:{
                
			}
		}
	},
	getters:{
        
	},
	plugins:[localPersist]
})
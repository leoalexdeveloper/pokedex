import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"
import Api from "../api/Api"
import EPokemonList from "../entities/PokemonList"
import IPokemonList from "../interfaces/PokemonList"
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"

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
					pokemonList: {},
					currentTeamObject: {},
					currentEditTeam: [],
					currentEditPage: 1 as number,
					initialPagination: [0,8],
					maxPokemonPerPage: 8 as number,
					maxPokemonsOnTeam: 6 as number
				}
			},
			mutations:{
				setPokemonList(state, pokemonList:IPokemonList<IPokemon>){
					Object.assign(state.pokemonList, {...pokemonList})
				},
				setCurrentTeamObject(state, team:ITeam<IPokemon>){
					Object.assign(state.currentTeamObject, {...team})
				},
				setCurrentEditPage(state, payload:number){
					state.currentEditPage = payload
				},
				setPokemonOnCurrentEditTeam(state, payload:IPokemon[]){
					state.currentEditTeam.push(payload)
				},
				removePokemonFromCurrentEditTeam(state, id:number){
					const foundPokemon = state.currentEditTeam.find((pokemon:IPokemon) => id === pokemon.id)
					console.log(foundPokemon)
				}
			},
			actions:{
				getPokemonListFromApi({commit}, payload:string){
					Api.get(payload).then((res:IPokemonList<IPokemon>) => commit("setPokemonList", new EPokemonList(res.count, res.next, res.previous, res.results)))
				}
			},
			getters:{

			}
		}
	},
	getters:{

	},
	plugins:[localPersist]
})

//import vue lib
import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"

//import classes
import Api from "../api/Api"

//import entities
import EPokemonList from "../entities/PokemonList"
import EPokemonAttrs from "../entities/PokemonAttrs"

//import interfaces
import IPokemonList from "../interfaces/PokemonList"
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"

//vuex-persist
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
					pokemonSpecs:{},
					savedTeams:{},
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
					state.currentEditTeam.push({...payload})
				},
				setTeamOnCurrentEditTeam(state, team:ITeam<IPokemon>){
					state.currentEditTeam = team
				},
				removePokemonFromCurrentEditTeam(state, selectedPokemon:IPokemon){
					const pokemonIndex = state.currentEditTeam.indexOf(selectedPokemon)
					state.currentEditTeam.splice(pokemonIndex, 1)
				},
				removeCurentTeamObject(state){
					state.currentEditTeam.length = 0
					state.currentTeamObject = {}
				},
				savedTeams(state, team:ITeam<IPokemon>){
					Object.assign(state.savedTeams, {...team})
				},
				removeSavedTeam(state, uuid:string){
					delete state.savedTeams[uuid]
				},
				setPokemonSpecs(state, pokemonSpec){
					const specs = state.pokemonSpecs
					specs[pokemonSpec.id] = pokemonSpec
					Object.assign(state.pokemonSpecs, {...specs})
				}
			},
			actions:{
				getPokemonListFromApi({commit}, payload:string){
					Api.get(payload).then((res:IPokemonList<IPokemon>) => commit("setPokemonList", new EPokemonList(res.count, res.next, res.previous, res.results)))
				},
				getPokemonSpecs({commit}, [uri, img]){
					Api.get(uri).then((res:EPokemonAttrs) => commit("setPokemonSpecs",new EPokemonAttrs(res.id, img, res.abilities, res.species, res.types, res.stats)))
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

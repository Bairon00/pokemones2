const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pokemonesFavoritos: [],
			Pokemones: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			




			getPokemones1: async () => {
				const store = getStore();
				const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
				const { results } = await resp.json();
				results.forEach(async (pokemon) => {
					const single_resp = await fetch(pokemon.url);
					const data = await single_resp.json();
					setStore({ Pokemones: [...store.Pokemones, data] })
				});

			},
			pokemonesFavoritos: (id) => {
				const store = getStore();
				var aa=true;

				for (let j = 0; j < store.pokemonesFavoritos?.length; j++) {
					if(id == store.pokemonesFavoritos[j].id) aa=false;
				}
				for (let i = 0; i < store.Pokemones.length; i++) {
					if (id == store.Pokemones[i].id && aa) 
						setStore({ pokemonesFavoritos: [...store.pokemonesFavoritos, store.Pokemones[i]] })
				
				}
			},
			eliminarPokemon: (id)=>{
				const store = getStore();
				let pokemones2=[];

				for (let j = 0; j < store.pokemonesFavoritos.length; j++){
					if(id != store.pokemonesFavoritos[j].id) pokemones2.push(store.pokemonesFavoritos[j])
				}

				setStore({pokemonesFavoritos : pokemones2})



			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}

		}
	};
};

export default getState;

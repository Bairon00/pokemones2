const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			/**getPokemones: () => {
				fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
					.then(result => result.json())
					.then(aa => {
						for (let i = 0; i < aa.results.length; i++) {
							fetch(aa.results[i].url)
								.then(res =>
									
									 res.json())
								.then(res => {			
									setStore(res)
									//setStore(prevArray => [...prevArray,re])
									console.log(res)
									//setStore(prevArray => [...prevArray,])
								}
								)
						} 
					}
					)
					.catch(error => console.log('error', error));

			},**/

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

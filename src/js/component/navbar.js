import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-danger mb-3">
		
				<Link to="/Favoritos"  style={{ textDecoration:"none"}}>
					<h4 className="mx-5 text-white" >Atrapados!</h4>
				</Link>
			<Link to="/"><img  style={{ width:"180px" }} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c0e8032-d1db-409c-84b9-37bc13f2473a/d3c3l66-fb6fe02d-56af-4fab-bd78-e6562f709162.png/v1/fill/w_900,h_488,strp/pokemon_atrapalos_ya_logo_by_gensafe_d3c3l66-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDg4IiwicGF0aCI6IlwvZlwvN2MwZTgwMzItZDFkYi00MDljLTg0YjktMzdiYzEzZjI0NzNhXC9kM2MzbDY2LWZiNmZlMDJkLTU2YWYtNGZhYi1iZDc4LWU2NTYyZjcwOTE2Mi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.HVh91D-7PCEKrwkaQTfV0J5Nw9eggYs1oPoZR_8iGCg"/></Link>
			<div className="ml-auto">
				<Link to="/" style={{ textDecoration:"none"}} >
					<h4 className="mx-5 text-white">Inicio</h4>
				</Link>
			</div>
		</nav>
	);
};

let Planets = [];

class Planet
{
    constructor(Name,Capacity_Storage,Mass)
    {
        this.Name = Name
        this.Capacity_Storage = Capacity_Storage
        this.Mass = Mass
    }

    AddPlanets(name,capacity_storage,mass)
    {
        Planets.push(new Planet(name,capacity_storage,mass))
        
    }

}

const ChangePlanet =  (PlanetIndex,name,capacity_storage,mass) => {
    Planet[PlanetIndex].name = name;
    Planet[PlanetIndex].capacity_storage = capacity_storage;
    Planet[PlanetIndex].mass = mass;

}
const deletePlanet = (PlanetIndex) => {
	Planet.splice(PlanetIndex);
}

const foundPlanet = (name) => {
	const found = Planet.find(function(element) {
    	return element.name == name;
	});
	return found;
}
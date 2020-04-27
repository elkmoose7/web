let SpaceStations = [];
class SpaceStation
{
    constructor(Name,Capacity,Needs)
    {
        this.Name = Name
        this.Capacity = Capacity
        this.Needs = Needs
    }

    AddSpaceStations(name,capacity,needs)
    {
        SpaceStations.push(new SpaceStation(name,capacity,needs))
    }

}

const ChangeSpaceStation = (StationIndex,name,capacity,needs) => {
	SpaceStation[StationIndex].Name = name;
    SpaceStation[StationIndex].Capacity = capacity;
    SpaceStation[StationIndex].Needs = needs;

}
const deleteSpaceStation = (StationIndex) => {
	SpaceStation.splice(StationIndex);
}

const foundSpaceStation = (name) => {
	const found = SpaceStation.find((element) => {
	  return element.name == name;
	});
	return found;
}
let GoodsArrivedtoPlanet = [];

class Good
{
    constructor(Name,Planet)
    {
        this.Name = Name
        this.Planet = Planet
    }

    AddGoods(name,planet)
    {
        GoodsArrivedtoPlanet.push(new Good(name,planet))
    }

}

const ChangeGoods = (GoodsIndex,name,planet) => {
	GoodsArrivedtoPlanet[GoodsIndex].Name = name;
	GoodsArrivedtoPlanet[GoodsIndex].Planet = planet;
}

const deleteoGoods =  (GoodsIndex) => {
	GoodsArrivedtoPlanet.splice(GoodsIndex);
}

const foundGoods = (name) => {
	const found = GoodsArrivedtoPlanet.find(function(element) {
  	return element.name == name;
	});
	return found;
}

const Goods = [];
class Good
{
    constructor(Code,Name,Weight)
    {
        this.Code = Code
        this.Name = Name
        this.Weight = Weight
    }

    AddGoods(code,name,weight)
    {
        Goods.push(new Good(code,name,weight))
    }

}

const ChangeGoods = (GoodsIndex,code,name,weight) => {
    Good[GoodsIndex].Code = code;
	Good[GoodsIndex].Name = name;
	Good[GoodsIndex].Weight = weight;

}
const deleteoGoods = (GoodsIndex) => {
	Good.splice(GoodsIndex);
}

const foundGoods = (name) =>{
	let found = Good.find(function(element) {
  	return element.name == name;
	});
	return found;
}
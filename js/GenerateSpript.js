const CarCategory = Object.freeze(
{
    None: '',
    Car: 'Car',
    Bike: 'Bike',
    Plane: 'Plane',
    Boat: 'Boat',
    Bycicle: 'Bycicle',
    Trailer: 'Trailer',
    Train: 'Train',
    Truck: 'Truck',
    Carrige: 'Carrige'
});

class Car
{
    Carid = 0;
    Name = "";
    GameName = ""
    Category = CarCategory.None;
    ImagePath = "";

    constructor(carid, name, gamename, category, imagepath)
    {
        this.Carid = carid;
        this.Name = name;         // Название машины
        this.Category = category; // Категория машины
        this.ImagePath = imagepath;
        this.GameName = gamename
    }
}

const myArray = [
    new Car(1, "Truck1", "truck1", CarCategory.Truck, "image1.png"),
    new Car(20000, "Zalupa", "zalupa", CarCategory.Bycicle, "image1.png"),
    new Car(20111, "Pizda", "pizda", CarCategory.Boat, "image1.png")
];

class IconID
{
    ImageRelativePath = "";
    IconID = 0;

    constructor(iconid, imagepath)
    {
        this.ImageRelativePath = imagepath;
        this.IconID = iconid;
    }
}

const MyIcons = 
[
    new IconID(0, "image.png"),
    new IconID(1, "Image2.png")
];

console.log(JSON.stringify(myArray, null, 4));
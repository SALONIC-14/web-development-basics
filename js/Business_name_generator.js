// without array

let adjective={
    0:"Crazy ",
    1:"Royal ",
    2:"Urban ",
    3:"Fresh ",
    4:"Happy ",
    5:"Tasty ",
    6:"Smart",
    7:"Quick",
    8:"Hot",
    9:"Cool",
    10:"Desi",
    11:"Modern",
    12:"Classic",

}
let shopName = {
  0: "Food",
  1: "Kitchen",
  2: "Cafe",
  3: "Bistro",
  4: "Bakery",
  5: "Dhaba",
  6: "Corner",
  7: "House",
  8: "Point",
  9: "Store",
  10: "Mart",
  11: "Zone",
  12: "Express",
  13: "Junction"
};
let suffix = {
  0: "Hub",
  1: "World",
  2: "Place",
  3: "Center",
  4: "Spot",
  5: "Adda",
  6: "Station",
  7: "Palace",
  8: "Street",
  9: "Factory"
};

let a=adjective[Math.floor(Math.random()*12)];
let b=shopName[Math.floor(Math.random()*13)];
let c=suffix[Math.floor(Math.random()*9)];
function BUSINESS_NAME_GENERATOR(a ,b,c)
{
    console.log(`BUSINESS_NAME : ${a} ${b} ${c}`);
}


BUSINESS_NAME_GENERATOR(a , b,c);


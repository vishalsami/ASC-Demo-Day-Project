document.getElementById('municipal').addEventListener('click', municipal);

function municipal() {
    console.log('MUNICIPAL WASTE');
    document.getElementById('details').style.visibility = "visible";
    document.getElementById('details').style.backgroundColor = "yellow";
    document.getElementById('img1').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Mixed_municipal_waste.JPG/200px-Mixed_municipal_waste.JPG';
    document.getElementById('p1').innerText = "Product Packaging, Yard Trimmings, Furniture, Clothing, Bottles, Cans, Food, Newspapers, Appliances, Electronics, Batteries";
    document.getElementById('p1').style.color = '#4B0082';
    document.getElementById('p1').style.textShadow = '2px 2px #ff4d4d';
}

document.getElementById('industrial').addEventListener('click', industrial);

function industrial() {
    console.log('INDUSTRIAL WASTE');
    document.getElementById('details').style.visibility = "visible";
    document.getElementById('details').style.backgroundColor = "#ADFF2F";
    document.getElementById('img1').src = "https://blog.idrenvironmental.com/hs-fs/hubfs/Stock%20images/Green%20concept%20as%20a%20leaf%20tree%20on%20top%20of%20mountain%20heap%20of%20garbage%20with%20roots%20as%20an%20environment%20or%20conservation%20icon%20for%20waste%20management%20or%20new%20healthy%20beginning..jpeg?width=450&name=Green%20concept%20as%20a%20leaf%20tree%20on%20top%20of%20mountain%20heap%20of%20garbage%20with%20roots%20as%20an%20environment%20or%20conservation%20icon%20for%20waste%20management%20or%20new%20healthy%20beginning..jpeg";
    document.getElementById('p1').innerText = "Electric Power Generation, Iron and Steel Manufacturing, Coal Combustion, Gravel, Oil, Solvents, Chemicals, Wood";
    document.getElementById('p1').style.color = 'red';
    document.getElementById('p1').style.textShadow = '3px 3px white';
}

document.getElementById('agricultural').addEventListener('click', agricultural);

function agricultural() {
    console.log('AGRICULTURAL WASTE');
    document.getElementById('details').style.visibility = "visible";
    document.getElementById('details').style.backgroundColor = "#90EE90";
    document.getElementById('img1').src = "https://images.tribuneindia.com/cms/gall_content/2016/4/2016_4$largeimg26_Tuesday_2016_013835239.jpg";
    document.getElementById('p1').innerText = "Manure, Oil, Plastics, Fertilizer, Pesticides, Herbicides, Medicines, Slaughterhouses, Vegetables";
    document.getElementById('p1').style.color = 'blue';
    document.getElementById('p1').style.textShadow = '3px 3px yellow';
}

document.getElementById('hazardous').addEventListener('click', hazardous);

function hazardous() {
    console.log('HAZARDOUS WASTE');
    document.getElementById('details').style.visibility = "visible";
    document.getElementById('details').style.backgroundColor = "#40E0D0";
    document.getElementById('img1').src = "https://www.flowstobay.org/wp-content/uploads/2020/03/hhwmaterials_0.png";
    document.getElementById('p1').innerText = "Electronic Appliances, Batteries, Fluorescent Bulbs, Paints, Cleaners, Oil, Gasoline";
    document.getElementById('p1').style.color = 'black';
    document.getElementById('p1').style.textShadow = '3px 3px pink';
}

let effects = {
    one: "Soil Contamination",
    two: "Water Contamination",
    three: "Air Contamination",
    four: "Greenhouse Effect",
    five: "Spreads Respiratory Diseases",
    six: "Affects Animal and Marine Life"
};

const array = [effects.one, effects.two, effects.three, effects.four, effects.five, effects.six];

const ol = document.querySelector('ol');

for (const element of array) {
    let li = document.createElement('li');
    li.innerText = element;
    ol.appendChild(li);
}
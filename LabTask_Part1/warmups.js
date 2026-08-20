const cities = ["Muscat", "Samail","Nizwa", "Sohar", "Sur","Salalah"];
//push
cities.push("Izki");
console.log(cities);
//pop
cities.pop();
console.log(cities);
//shift
cities.shift();
console.log(cities);
//unshift
cities.unshift("Barka");
console.log(cities);
//Log .lenght befor adding a duplicate entry
console.log("Cities before adding duplicate:", cities.length);
//Log .lenght after adding a duplicate entry
cities.push("Muscat");
console.log("Cities after adding duplicate:", cities.length);

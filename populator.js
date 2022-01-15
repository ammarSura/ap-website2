var lst = [];
var lst2 = []
var places = ["BOM", "DEL", "HYD", "BLR", "CCU", "MAA"];
for (let l = 0; l < places.length; l++) {
    for (let k = 0; k < places.length; k++) {
        if (l !== k) {
            

            for (let j = 1; j < 32; j++) {
                var x = j.toString();
                if (x < 10) {
                    x = "0" + j;
                }
                for(let i = 0; i < 2; i++) {
                    var price = 0;
                    if (lst2.length > 0 ) {
                        for (let q = 0; q < lst2.length; q ++) {
                            // console.log(j)
                            if ( (places[l] === lst2[q].from && places[k].to === lst2[q].to ) || ( places[k] === lst2[q].to && places[l] === lst2[q].from ) ) {
                                price = lst2[q].price;
                            } else {
                                price = 2500 + Math.random() * 4000;
                                lst2.push({from: places[l], to: places[k], price: price});
                            }
                        }
                    } else {
                        price = 2500 + Math.random() * 4000;
                        lst2.push({from: places[l], to: places[k], price: price});
                    }
                    var s1 = 6 + i * 6;
                    var s2 = s1 + 2;
                    if (s1 < 10) {
                        s1 = "0" + s1.toString();
                        s2 = "0" + s2.toString();
                    }
                    lst.push({
                        flight_number: "SE" + ((l+1)*1000 + i).toString(),
                        plane_type: "Airbus A320",
                        from: places[l],
                        to: places[k],
                        date: "2022-01-" + x,
                        start_time: s1.toString() + ":00:00",
                        end_time: s2.toString() + ":30:00",
                        seats_booked: [],
                        price: price
                    })
                    lst.push({
                        flight_number: "SE" + ((l+1)*1000 + i).toString(),
                        plane_type: "Airbus A320",
                        from: places[k],
                        to: places[l],
                        date: "2022-01-" + x,
                        start_time: (10 + i * 6).toString() + ":00:00",
                        end_time: (12 + i * 6).toString() + ":30:00",
                        seats_booked: [],
                        price: price
                    })
                }
            }
        }
    }
}



// for (let i = 0; i < lst.length; i++) {
    
    
// }



var json = JSON.stringify(lst);

console.log(json)

var fs = require('fs');
fs.writeFile('myjsonfile.json', json, 'utf8', () => {
    console.log('nice')
}); 
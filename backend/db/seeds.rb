bb = User.create(username: "BingoBongo", password: "abc123")

lima = City.create(name: "Lima", state: "Lima", country: "Peru", flag_url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg", food: "chicha morada", language: "Spanish")
cf = City.create(name: "Cienfuegos", state: "Cienfuegos", country: "Cuba", flag_url: "https://cdn.britannica.com/10/5110-004-38075E57/Flag-Cuba.jpg", food: "maduros", language: "Spanish")

bb.passport.trips.create(city: lima, date_travelled: "Tuesday March 9th 2021")
bb.passport.trips.create(city: cf, date_travelled: "Monday November 7th 2018")
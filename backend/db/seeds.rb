bb = User.create(username: "BingoBongo", password: "abc123")

lima = City.create(name: "Lima", state: "Lima", country: "Peru", flag_url: "../peru.png", food: "chicha morada", language: "Spanish")
cf = City.create(name: "Cienfuegos", state: "Cienfuegos", country: "Cuba", flag_url: "../cuba.jpeg", food: "maduros", language: "Spanish")

bb.passport.trips.create(city: lima, date_travelled: "Tuesday March 9th 2021")
bb.passport.trips.create(city: cf, date_travelled: "Monday November 7th 2018")
bb = User.create(username: "BingoBongo", password: "abc123")

lima = City.create(name: "Lima", state: "Lima", country: "Peru", continent: "South America", image_key: "9VTHnaNzib-1zgdzaoLO7Q", flag_url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg", flag_emoji: "🇵🇪", food: "My favorite meal is Ceviche. Goes so well with a glass of Chicha Morada!", language: "My friends and I all speak Spanish! ¡Bienvenidos a nuestro país!", religion: "I go with my family to Catholic mass on Sundays!")
toronto = City.create(name: "Toronto", state: "Ontario", country: "Canada", continent: "North America", image_key: "rY7guF8KWnRuQ-GDKxuPTw", flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png", flag_emoji: "🇨🇦", food: "You should try a peameal bacon sandwich. I think you can get one down at the St. Lawrence Market, eh?", language: "Many people in other parts of the country speak French, and a few here do as well. But we primarily speak English here.", religion: "People here practice all kinds of religions, but most seem to be Catholics, Protestants, or not very religious.")
tokyo = City.create(name: "Tokyo", state: "Tokyo", country: "Japan", continent: "Asia", image_key: "IlFyfyTOvBxFrskJKyOZ6Q", flag_url: "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3342/18816/japan-flag__36690.1575327806.jpg?c=2", flag_emoji: "🇯🇵", food: "You've never had sushi like we have here!", language: "We speak Japanese here. おはようございます！", religion: "Most people here follow Shintoism, Buddhism, or both!")
macau = City.create(name: "Macao", state: "Macao", country: "People's Republic of China", continent: "Asia", image_key: "KGHbNmfZQ8z9BcWb1a_3lg", flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/1200px-Flag_of_Macau.svg.png", flag_emoji: "🇲🇴", food: "Oh man, I love a good Portguese Egg Tart! 吃飯囉！", language: "Though some people here speak Portuguese, my family and I speak in Chinese!", religion: "Many people here are Buddhists, and there are a few Catholics, but I don't practice any religion.")
bengaluru = City.create(name: "Bengaluru", state: "Karnataka", country: "India", continent: "Asia", image_key: "rwyMGYLiJIeHA1vQVdbzIg", flag_url: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg", flag_emoji: "🇮🇳", food: "Oh Ji, you have got to try some idli & dosa, na? Made from rice flour and urad dal, so yummy!", language: "People in this country speak so many languages depending on where they are from. Here in this region, we speak Kannada. (Nope, not like the Maple Leaf Country, though the name looks similar.)", religion: "There are some Muslims here and a few Christians, but almost everybody I know is Hindu!")
zurich = City.create(name: "Zürich", state: "Zürich", country: "Switzerland", continent: "Europe", image_key: "XPJZd38HsQTpdHPIFD0CHg", flag_url: "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3631/18725/switzerland-flag__08778.1575332706.jpg?c=2", flag_emoji: "🇨🇭", food: "You've probably eaten Cheese Fondue before, but did you know that it originates here?", language: "We speak German here.", religion: "Several people here aren't particularly religious, but most people around here, like myself, follow some denomination of Christianity.")
rome = City.create(name: "Rome", state: "Lazio", country: "Italy", continent: "Europe", image_key: "S42Qzdt2b6Zw0iSs6imTXw", flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png", flag_emoji: "🇮🇹", food: "My grandmother's gnocchi is just so good, you have to try!! Mangia!", language: "We speak Italian here.", religion: "Is the Pope Catholic? Because many people here are, and the Pope himself lives only a few minutes away.")
paris = City.create(name: "Paris", state: "Île-de-France", country: "France", continent: "Europe", image_key: "pVbOKwcGeh0hc3mYR7cQvg", flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png", flag_emoji: "🇫🇷", food: 'In America, people sometimes call them "crescent rolls," but around here we call them "croissants," and you can\'t leave without trying one!', language: "We speak French here.", religion: '"Some say the soul of the city\'s the toll of the Bells of Notre Dame." Quite a few people here are atheists, but the majority of people practice Catholicism.')
nyc= City.create(name: "New York City", state: "New York", country: "United States of America", continent: "North America", image_key: "yoqbCIEHbWB16feLHU0saA", flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png", flag_emoji: "🇺🇸", food: "You thought you knew what good pizza was until you had some from around here! Grab a bagel while you're at it.", language: "People in this city speak all kinds of languages! But the most common, in the city and the country, is definitely English.", religion: "This city is super religiously diverse, with lots people practicing all kinds of faiths. In this part of the city though, you'll also find lots of people who aren't particularly religious.")
puebla = City.create(name: "Puebla", state: "Puebla", country: "Mexico", continent: "North America", image_key: "Ml86dTM9LPynllM9pDl7ty", flag_url: "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3421/18792/mexico-flag__84644.1575325491.jpg?c=2", flag_emoji: "🇲🇽", food: "While you're here, be sure to try some Chiles in Nogada - it's my favorite!", language: "You'll find a few people around here who speak Náhuatl, but most of us speak Spanish.", religion: "You'll have a hard time finding anybody in this city who isn't Catholic, and of those who aren't, many are also Christians.")
ba = City.create(name: "Buenos Aires", state: "", country: "Argentina", continent: "South America", image_key: "vVtXCecu0MWJV5tC7qyJYQ", flag_url: "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg", flag_emoji: "🇦🇷", food: "The empanadas here - so good! Can't miss!", language: "Here we speak Spanish!", religion: "Like my family and I, many people here follow Catholicism.")
sp = City.create(name: "São Paulo", state: "São Paulo", country: "Brazil", continent: "South America", image_key: "5xpLICrGF5E0T9628G5xul", flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png", flag_emoji: "🇧🇷", food: "You've got to try a Pao de Queijo, maybe with a cafe con leche. Delicioso!", language: "We speak Portuguese here.", religion: "Between the number of Catholics and Protestants, you'll find that most people around here follow Christianity.")
kampala = City.create(name: "Kampala", state: "", country: "Republic of Uganda", continent: "Africa", image_key: "WLmw8njZBsfBEgAOkaJF-w", flag_url: "https://www.countryflags.com/wp-content/uploads/uganda-flag-png-large.png", flag_emoji: "🇺🇬", food: "Please make time to try some Posho or Kwon while you are here! So yummy.", language: "There are over forty-three living languages throughout this country, and we are in the capital city right now! Though there are so many languages spoken here, Swahili and English are our two official languages.", religion: "The majority of people here are Christians, but you will encounter many Muslims as well.")
abidjan = City.create(name: "Abidjan", state: "Abidjan", country: "Republic of Côte d'Ivoire", continent: "Africa", image_key: "kFSxmH6IygTmoFSvGNReug", flag_url: "https://www.countryflags.com/wp-content/uploads/cote-d-ivoire-flag-png-large.png", flag_emoji: "🇨🇮", food: "Whether you are new here or have been here before, you have got to try some Plakali, or maybe a nice drink of Nyamanku!", language: "The official language is French, but there are around 70 languages spoken by the people here.", religion: "There are several Christians and several non-religious people here, but most people in this country are follow Islam.")
auckland = City.create(name: "Auckland", state: "", country: "New Zealand", continent: "Oceania", image_key: "ak-8QKbZlxIxgrfiHbrTbg", flag_url: "https://cdn.britannica.com/17/3017-004-F42D7C4D/Flag-New-Zealand.jpg", flag_emoji: "🇳🇿", food: "One traditional Maori dish that many love around here is called Hangi. A lot of locals eat it on special occasions, but as a tourist, you should make sure to try some!", language: "There are two official languages around here - English and Māori.", religion: "Many people, like me, are not religious at all. But you will find some Christians throughout the country.")

bb.passport.trips.create(city: lima, date_travelled: "Tuesday March 9th 2021")
bb.passport.trips.create(city: sp, date_travelled: "Monday November 7th 2018")
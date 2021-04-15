bb = User.create(username: "BingoBongo", password: "abc123")

initialGreetings = [
      "Hello! Nice to meet you. If there's something specific you're looking for, I might be able to help.",
      "Hey, what's up? If you ask something specific, maybe I can help!"
    ]
dontUnderstand = [
        "I'm sorry.. I don't quite understand. Try asking another question, or being more specific.",
        "Hmm.. I don't get what you mean.. Can you say or ask that in a different way?"
      ]
greetings = [
        "Hey! :)",
        "Wonderful day!",
        "Life is great honestly.",
        "Howdy!!",
      ]
ok = ["okay", "ok", "alright", "fine", "very well"]
correct = "Yes, that's correct!"

spanishInitialGreetings = [
    {in_language: ["¡Hola! ","Encantado ","de ","conocerte. ","Si ","hay ","algo ","específico ","que ","estás ","buscando, ","quizás ","pueda ","ayudarte."],
    translation_arr: ["hello","charming","of","to meet you","if","there is","something","specific","that","you are","looking for","maybe","I can","to help you"],
    english_sentence: "Hello! Nice to meet you. If there's something specific you're looking for, I might be able to help."},
    {in_language: ["Oye, ","¿qué ","pasa? ","Si ","preguntas ","algo ","específico, ","¡tal vez ","pueda ","ayudarte!"],
    translation_arr: ["Hey","what","happens","if","you ask","something","specific","perhaps","I can","to help you"],
    english_sentence: "Hey, what's up? If you ask something specific, maybe I can help!"}
  ]
spanishDontUnderstand = [
    {in_language: ["Lo siento ... ","no ","entiendo ","del ","todo. ","Intenta ","hacer ","otra ","pregunta ","o ","ser ","más ","específico."],
    translation_arr: ["i'm sorry","don't","I understand","of the","all","try","to make","another","question","or","to be","more","specific"],
    english_sentence: "I'm sorry.. I don't quite understand. Try asking another question, or being more specific."},
    {in_language: ["Hmm ... ","No ","entiendo ","lo ","que ","quieres ","decir ... ","¿Puedes ","decir ","o ","preguntar ","eso ","de ","otra ","manera?"],
    translation_arr: ["Hmm ... ","don't","I understand","it","that","you want","to say","you can","to say","or","to ask","that","of","another","way"],
    english_sentence: "Hmm.. I don't get what you mean.. Can you say or ask that in a different way?"}
  ]
spanishGreetings = [
    {in_language: ["La ","vida ","es ","genial. 😎"],
    translation_arr: ["the","life","is","great"],
    english_sentence: "Life is great honestly."},
    {in_language: ["¡Hola!"],
    translation_arr: ["hello"],
    english_sentence: "Hello!"},
    {in_language: ["¡Oye! :)"],
    translation_arr: ["hey"],
    english_sentence: "Hey! :)"},
    {in_language: ["¡Es ","un ","día ","maravilloso!"],
    translation_arr: ["it is","a","day","marvelous"],
    english_sentence: "It's a wonderful day!"},
]
spanishOK = [
    {in_language: ["OK"],
    translation_arr: ["okay"],
    english_sentence: "OK"},
    {in_language: ["Bien"],
    translation_arr: ["Alright"],
    english_sentence: "Alright"},
    {in_language: ["Muy ","bien"],
    translation_arr: ["very","well"],
    english_sentence: "Very well"},
]
spanishCorrect = {in_language: ["¡Si, ","eso ","es ","correcto!"],
    translation_arr: ["yes","that","is","correct"],
    english_sentence: "Yes, that's correct!"}

lima_food = {in_language: ["Mi ", "comida ", "favorita ", "es ", "el ceviche. ","¡Va ","muy ","bien ","con ","una copa ","de ","Chicha Morada!"], 
            translation_arr: ["My ", "meal ","favorite ","is ","Ceviche. ", "Goes ","very ","well ","with ","a glass ","of ","Chicha Morada!"],
            english_sentence: "My favorite meal is Ceviche. Goes so well with a glass of Chicha Morada!"}
lima_language = {in_language: ["¡Mis ","amigos ","y ","yo ","hablamos ","español! ","¡Bienvenidos ","a ","nuestro ","país!"],
                translation_arr: ["my","friends","and","I","we speak","spanish","welcome","to","our","country"],
                english_sentence: "My friends and I all speak Spanish! ¡Bienvenidos a nuestro país!"}
lima_religion = {in_language: ["¡Voy ","con ","mi ","familia ","a ","la misa ","católica ","los domingos!"],
                translation_arr:["I go","with","my","family","to","mass","Catholic","on sundays"] ,
                english_sentence: "I go with my family to Catholic mass on Sundays!"}

puebla_food = {in_language: ["Mientras ","estés ","aquí, ","debes ","probar ","algunos ","chiles en Nogada. ","¡Es ","mi ","favorito!"], 
            translation_arr: ["while","you are","here","you must","try","some","Chiles in Nogada. ","it is","my","favorite"],
            english_sentence: "While you're here, be sure to try some Chiles in Nogada - it's my favorite!"}
puebla_language = {in_language: ["Encontrará ","algunas ","personas ","por ","aquí ","que ","hablan ","náhuatl, ","pero ","la ","mayoría ","de ","nosotros ","habla ","español."],
                translation_arr: ["you will find","some","people","for","here","that","they speak","Náhuatl","but","the","majority","of","us","speaks","Spanish"],
                english_sentence:  "You'll find a few people around here who speak Náhuatl, but most of us speak Spanish."}
puebla_religion = {in_language: ["Te ","será ","difícil ","encontrar a ","alguien ","en ","esta ","ciudad ","que ","no sea ","católico, ","y ","de ","los ","que ","no lo son, ","muchos ","también ","son ","cristianos."],
                translation_arr: ["to you","it will be","difficult","to find","someone","in","this","city","that","is not","Catholic","and","of","those","that","are not that","many","also","are","Christians"],
                english_sentence: "You'll have a hard time finding anybody in this city who isn't Catholic, and of those who aren't, many are also Christians."}

ba_food = {in_language: ["Las ","empanadas ","aquí - ","¡qué ","ricas! ","¡No ","puedes ","saltartelas!"], 
            translation_arr: ["the","empanadas","here","what","rich","no","you can","to miss them"],
            english_sentence: "The empanadas here - so good! Can't miss!"}
ba_language = {in_language: ["¡Aqui ","hablamos ","español!"],
                translation_arr: ["here","we speak","Spanish"],
                english_sentence:  "Here we speak Spanish!"}
ba_religion = {in_language: ["Como ","mi ","familia ","y ","yo, ","mucha ","gente ","aquí ","sigue ","el catolicismo"],
                translation_arr: ["Like","my","family","and","I","many","people","here","follows","Catholicism"],
                english_sentence: "Like my family and I, many people here follow Catholicism."}

# tokyo_food = {in_language: ["私","たちがここにいるような寿司を食べたことがない！"], 
#             translation_arr: ,
#             english_sentence: "You've never had sushi like we have here!"}
# tokyo_language = {in_language: [],
#             translation_arr: ,
#             english_sentence: "We speak Japanese here. おはようございます！"}
# tokyo_religion = {in_language: [],
#             translation_arr: ,
#             english_sentence: "Most people here follow Shintoism, Buddhism, or both!"}
 
rome_food = {in_language: ["Gli ","gnocchi ","di ","mia ","nonna ","sono ","così ","buoni, ","devi ","provare! ","Mangia!"], 
            translation_arr: ["the","gnocchi","of","my","grandmother","they are","so","good","you must","try","eat up"],
            english_sentence: "My grandmother's gnocchi is just so good, you have to try!! Mangia!"}
rome_language = {in_language: ["Parliamo ","italiano ","qui."],
                translation_arr: ["we speak","Italian","here"],
                english_sentence: "We speak Italian here."}
rome_religion = {in_language: ["Il Papa ","è ","cattolico? ","Perché ","molte ","persone ","qui ","sono, ","e ","il Papa ","stesso ","vive ","a pochi ","minuti ","di ","distanza."],
                translation_arr: ["the Pope","is","Catholic? ","because","many","people","here","they are","and","the Pope","same","lives","a few","minutes","of","distance"],
                english_sentence: "Is the Pope Catholic? Because many people here are, and the Pope himself lives only a few minutes away."}

paris_food = {in_language: ["En ","Amérique, ","les ","gens ","les ","appellent ","parfois ","«crescent rolls», ","mais ","ici, ","nous ","les ","appelons ","«croissants», ","et ","vous ","ne ","pouvez ","pas ","partir ","sans ","en essayer ","un!"], 
            translation_arr: ["in","America","the","people","them","they call","sometimes","crescent rolls","but","here","we","them","we call","croissants","and","you","not","you can","not","to leave","without","try","one"],
            english_sentence: 'In America, people sometimes call them "crescent rolls," but around here we call them "croissants," and you can\'t leave without trying one!'}
paris_language = {in_language: ["On ","parle ","français ","ici. ","Parlez-","vous ","français?"],
                translation_arr: ["One","speaks","French","here","you speak","you","French"],
                english_sentence: "We speak French here. Parlez-vous français?"}
paris_religion = {in_language: ["«Et ","l'on dit ","que ","c'est ","l'âme ","de ","la ","ville ","qui ","s’enflamme ","quand ","sonnent ","les ","cloches ","de ","Notre-Dame.» ","Beaucoup ","de ","gens ","ici ","sont ","athées, ","mais ","la ","majorité ","des ","gens ","pratiquent ","le catholicisme."],
                translation_arr: ["and","it's said","that","it's","the soul","of","the","city","that","ignites itself","when","ring","the","bells","of","Notre Dame","A lot","of","people","here","they are","atheists","but","the","majority","of","people","they practice","Catholicism"],
                english_sentence: '"Some say the soul of the city\'s the toll of the Bells of Notre Dame." Quite a few people here are atheists, but the majority of people practice Catholicism.'}

sp_food = {in_language: ["Tem ","que ","experimentar ","um ","Pão de Queijo, ","talvez ","com ","um ","café ","com ","leite. ","Delicioso!"], 
            translation_arr: ["you have","to","to try","a","Pão de Queijo","maybe","with","a","coffee","with","milk","delicious"],
            english_sentence: "You've got to try a Pao de Queijo, maybe with a café com leite. Delicioso!"}
sp_language = {in_language: ["Nós ","falamos ","português ","aqui."],
                translation_arr: ["we","we speak","Portuguese","here"],
                english_sentence: "We speak Portuguese here."}
sp_religion = {in_language: ["Entre ","o ","número ","de ","católicos ","e ","protestantes, ","você ","descobrirá ","que ","a ","maioria ","das ","pessoas ","por ","aqui ","segue ","o cristianismo."],
                translation_arr: ["between","the","number","of","Catholics","and","Protestants","you","will discover","that","the","majority","of","people","for","here","follows","Christianiity"],
                english_sentence: "Between the number of Catholics and Protestants, you'll find that most people around here follow Christianity."}

### template
# ba_food = {in_language: [], 
#             translation_arr: ,
#             english_sentence: }
# ba_language = {in_language: [],
#                 translation_arr: ,
#                 english_sentence: }
# ba_religion = {in_language: [],
#                 translation_arr: ,
#                 english_sentence: }

### untranslated ones below
# macau = City.create(name: "Macao", state: "Macao", country: "People's Republic of China", continent: "Asia", globe_emoji: "🌏", image_key: "KGHbNmfZQ8z9BcWb1a_3lg", flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/1200px-Flag_of_Macau.svg.png", flag_emoji: "🇲🇴", food: "Oh man, I love a good Portguese Egg Tart! 吃飯囉！", language: "Though some people here speak Portuguese, my family and I speak in Chinese!", religion: "Many people here are Buddhists, and there are a few Catholics, but I don't practice any religion.", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok, correct: correct)
# tokyo = City.create(name: "Tokyo", state: "Tokyo", country: "Japan", continent: "Asia", globe_emoji: "🌏", image_key: "IlFyfyTOvBxFrskJKyOZ6Q", flag_url: "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3342/18816/japan-flag__36690.1575327806.jpg?c=2", flag_emoji: "🇯🇵", food: "You've never had sushi like we have here!", language: "We speak Japanese here. おはようございます！", religion: "Most people here follow Shintoism, Buddhism, or both!", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok, correct: correct)
# bengaluru = City.create(name: "Bengaluru", state: "Karnataka", country: "India", continent: "Asia", globe_emoji: "🌏", image_key: "rwyMGYLiJIeHA1vQVdbzIg", flag_url: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg", flag_emoji: "🇮🇳", food: "Oh Ji, you have got to try some idli & dosa, na? Made from rice flour and urad dal, so yummy!", language: "People in this country speak so many languages depending on where they are from. Here in this region, we speak Kannada. (Nope, not like the Maple Leaf Country, though the name looks similar.)", religion: "There are some Muslims here and a few Christians, but almost everybody I know is Hindu!", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok, correct: correct)
# kampala = City.create(name: "Kampala", state: "", country: "Republic of Uganda", continent: "Africa", globe_emoji: "🌍", image_key: "WLmw8njZBsfBEgAOkaJF-w", flag_url: "https://www.countryflags.com/wp-content/uploads/uganda-flag-png-large.png", flag_emoji: "🇺🇬", food: "Please make time to try some Posho or Kwon while you are here! So yummy.", language: "There are over forty-three living languages throughout this country, and we are in the capital city right now! Though there are so many languages spoken here, Swahili and English are our two official languages.", religion: "The majority of people here are Christians, but you will encounter many Muslims as well.", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok, correct: correct)
# abidjan = City.create(name: "Abidjan", state: "Abidjan", country: "Republic of Côte d'Ivoire", continent: "Africa", globe_emoji: "🌍", image_key: "kFSxmH6IygTmoFSvGNReug", flag_url: "https://www.countryflags.com/wp-content/uploads/cote-d-ivoire-flag-png-large.png", flag_emoji: "🇨🇮", food: "Whether you are new here or have been here before, you have got to try some Plakali, or maybe a nice drink of Nyamanku!", language: "The official language is French, but there are around 70 languages spoken by the people here.", religion: "There are several Christians and several non-religious people here, but most people in this country are follow Islam.", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok, correct: correct)
# zurich = City.create(name: "Zürich", state: "Zürich", country: "Switzerland", continent: "Europe", globe_emoji: "🌍", image_key: "XPJZd38HsQTpdHPIFD0CHg", flag_url: "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3631/18725/switzerland-flag__08778.1575332706.jpg?c=2", flag_emoji: "🇨🇭", food: "You've probably eaten Cheese Fondue before, but did you know that it originates here?", language: "We speak German here.", religion: "Several people here aren't particularly religious, but most people around here, like myself, follow some denomination of Christianity.", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok, correct: correct)
### translated ones below
nyc= City.create(name: "New York City", state: "New York", country: "United States of America", continent: "North America", globe_emoji: "🌎", image_key: "yoqbCIEHbWB16feLHU0saA", flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png", flag_emoji: "🇺🇸", food: "You thought you knew what good pizza was until you had some from around here! Grab a bagel while you're at it.", language: "People in this city speak all kinds of languages! But the most common, in the city and the country, is definitely English.", religion: "This city is super religiously diverse, with lots people practicing all kinds of faiths. In this part of the city though, you'll also find lots of people who aren't particularly religious.", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok, correct: correct)
lima = City.create(name: "Lima", state: "Lima", country: "Peru", continent: "South America", globe_emoji: "🌎", image_key: "9VTHnaNzib-1zgdzaoLO7Q", flag_url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg", flag_emoji: "🇵🇪", food: lima_food, language: lima_language, religion: lima_religion, initial_greetings: spanishInitialGreetings, dont_understand: spanishDontUnderstand, greetings: spanishGreetings, ok: spanishOK, correct: spanishCorrect)
toronto = City.create(name: "Toronto", state: "Ontario", country: "Canada", continent: "North America", globe_emoji: "🌎", image_key: "rY7guF8KWnRuQ-GDKxuPTw", flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png", flag_emoji: "🇨🇦", food: "You should try a peameal bacon sandwich. I think you can get one down at the St. Lawrence Market, eh?", language: "Many people in other parts of the country speak French, and a few here do as well. But we primarily speak English here.", religion: "People here practice all kinds of religions, but most seem to be Catholics, Protestants, or not very religious.", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok,  correct: correct)
rome = City.create(name: "Rome", state: "Lazio", country: "Italy", continent: "Europe", globe_emoji: "🌍", image_key: "S42Qzdt2b6Zw0iSs6imTXw", flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png", flag_emoji: "🇮🇹", food: rome_food, language: rome_language, religion: rome_religion, initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok,  correct: correct) #greetings need be translated
paris = City.create(name: "Paris", state: "Île-de-France", country: "France", continent: "Europe", globe_emoji: "🌍", image_key: "pVbOKwcGeh0hc3mYR7cQvg", flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png", flag_emoji: "🇫🇷", food: paris_food, language: paris_language, religion: paris_religion, initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings,ok: ok,  correct: correct) #greetings need be translated
puebla = City.create(name: "Puebla", state: "Puebla", country: "Mexico", continent: "North America", globe_emoji: "🌎", image_key: "Ml86dTM9LPynllM9pDl7ty", flag_url: "https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3421/18792/mexico-flag__84644.1575325491.jpg?c=2", flag_emoji: "🇲🇽", food: puebla_food, language: puebla_language, religion: puebla_religion, initial_greetings: spanishInitialGreetings, dont_understand: spanishDontUnderstand, greetings: spanishGreetings, ok: spanishOK, correct: spanishCorrect)
ba = City.create(name: "Buenos Aires", state: "", country: "Argentina", continent: "South America", globe_emoji: "🌎", image_key: "vVtXCecu0MWJV5tC7qyJYQ", flag_url: "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg", flag_emoji: "🇦🇷", food: ba_food, language: ba_language, religion: ba_religion, initial_greetings: spanishInitialGreetings, dont_understand: spanishDontUnderstand, greetings: spanishGreetings, ok: spanishOK, correct: spanishCorrect)
sp = City.create(name: "São Paulo", state: "São Paulo", country: "Brazil", continent: "South America", globe_emoji: "🌎", image_key: "5xpLICrGF5E0T9628G5xul", flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png", flag_emoji: "🇧🇷", food: sp_food, language: sp_language, religion: sp_religion, initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok,  correct: correct) #greetings need be translated
auckland = City.create(name: "Auckland", state: "", country: "New Zealand", continent: "Oceania", globe_emoji: "🌏", image_key: "ak-8QKbZlxIxgrfiHbrTbg", flag_url: "https://cdn.britannica.com/17/3017-004-F42D7C4D/Flag-New-Zealand.jpg", flag_emoji: "🇳🇿", food: "One traditional Maori dish that many love around here is called Hangi. A lot of locals eat it on special occasions, but as a tourist, you should make sure to try some!", language: "There are two official languages around here - English and Māori.", religion: "Many people, like me, are not religious at all. But you will find some Christians throughout the country.", initial_greetings: initialGreetings, dont_understand: dontUnderstand, greetings: greetings, ok: ok,  correct: correct)

bb.passport.trips.create(city: lima, date_travelled: "Saturday August 8th 2020")
bb.passport.trips.create(city: nyc, date_travelled: "Saturday October 10th 2020")




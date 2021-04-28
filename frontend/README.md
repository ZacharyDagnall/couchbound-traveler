# Couchbound Traveler

### by Zachary Dagnall

## Functionality

This app is designed to emulate a world traveling experience. A User can log in (don't forget to remove your shoes first, this is an airport after all) or signup, and they will then be taken to the "Airport". There, they can view their Passport page (a list of all the "Trips" they have taken with the app), update their credentials, or take a new Trip. When taking a new Trip, they are taken to a random City using a Mapillary 'street view' interface, where they can click around using arrows, and make a guess about where in the world they are. The User can chat with a "local" (a chat function) to ask questions about the culture (food, language, religion, or other interesting facts) of their current 'location'. This can help them to guess their location, or just teach them more about where they are. The chat feature's messages to the User will, by default, be in one of the most popular languages or the location (sometimes English, often not). The User can hover over any word with their cursor to see an English translation for that particular word, to emulate the experience of using a language-to-language dictionary when traveling in another country. To put the chat language into only English, the User can click the British flag next to the chat bar, and the chat will change to an English-only mode. To put it back, the User can click the globe emoji where the flag used to be. Upon exiting their Trip and revisiting their Passport page, the User can see that their most recent Trip was automatically added to their list of Trips. The User can choose to delete any Trips from their record.

## Technical

This app was built using a Rails backend and a React frontend, and it's main functionality comes from utilizing MapillaryViewer from the [react-mapillary](https://www.npmjs.com/package/react-mapillary) library, which utilizes [Mapillary](https://www.mapillary.com/)'s API.

Couchbound Traveler's Rails [backend](https://github.com/ZacharyDagnall/couchbound-traveler/tree/master/backend) uses PostgreSQL for its structure of four models:

- User, which has_one Passport (and has a unique username and a password with a min length of 5 characters)
  - a User's Passport is automatically created when that User is created
- Passport, which belongs_to one User and which has_many Trips
- Trip, which belongs_to one Passport and belongs_to one City
- City

The app implements full Auth, including JWT, localstorage, and the bcryt gem for secure passwords.

Couchbound Traveler's React frontend has primarily all custom CSS, with the exception of Trip cards imported from Bootstrap. React Router was utilized in order to add client-side route functionality as a Single-Page App.

## Future Developments

Some future developments could be:

- More cities in database
- More robust language support (utilizing a translation API)
- More robust Chat logic
- More factoids and information about each location

## Contact

Feel free to contact me on [LinkedIn](https://www.linkedin.com/in/zachary-dagnall/).

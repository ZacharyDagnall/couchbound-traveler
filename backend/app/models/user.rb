class User < ApplicationRecord
    has_secure_password
    has_one :passport

    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true, length: {minimum: 5}

    after_create :create_passport

    def create_passport
        Passport.create(user: self)
    end

    def trips
        self.passport.trips.map{|trip| {id: trip.id, city: trip.city.name, flag: trip.city.flag_url, continent: trip.city.continent, country: trip.city.country, state: trip.city.state, date: trip.date_travelled}}
    end

    def next_city
        been_there = self.passport.trips.map{|trip| trip.city}              # cities you've already traveled to
        less_wandered = City.all.filter{|city| !been_there.include?(city)}  # cities you haven't traveled to yet
        # less_wandered.push(City.find_by(name: "Macau"))             # for prez only, since Macau is pre-seeded into passport, but still want to possibly go there
        # less_wandered.push(City.find_by(name: "New York City"))     # for prez only, since NYC is pre-seeded into passport, but still want to possibly go there
        less_wandered.empty? ? City.all.sample : less_wandered.sample
    end

end

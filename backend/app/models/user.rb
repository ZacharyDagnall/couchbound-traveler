class User < ApplicationRecord
    has_secure_password
    has_one :passport

    after_create :create_passport

    def create_passport
        Passport.create(user: self)
    end

    def trips
        self.passport.trips.map{|trip| {id: trip.id, city: trip.city.name, flag: trip.city.flag_url, continent: trip.city.continent, country: trip.city.country, state: trip.city.state, date: trip.date_travelled}}
    end

end

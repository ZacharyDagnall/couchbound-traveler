class User < ApplicationRecord
    has_secure_password
    has_one :passport

    after_create :create_passport

    def create_passport
        Passport.create(user: self)
    end

end

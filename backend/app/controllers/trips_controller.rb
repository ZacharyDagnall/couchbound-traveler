class TripsController < ApplicationController

    def delete
        Trip.find(params[:id]).destroy
        render json: {}
    end
    
    def create
        @user = User.find(params[:id])
        @city = City.find_by(name: params[:city])
        @user.passport.trips.create(city: @city, date_travelled: Time.now.strftime("%a, %b %d, %Y") )
    end
end

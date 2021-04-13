class TripsController < ApplicationController

    def delete
        Trip.find(params[:id]).destroy
        render json: {}
    end
    
    def create
        @user = User.find(params[:id])
        @city = City.create(name: params[:city], state: params[:state], country: params[:country], continent: params[:continent], flag_url: "https://cdn.britannica.com/10/5110-004-38075E57/Flag-Cuba.jpg")
        @user.passport.trips.create(city: @city, date_travelled: Time.now.strftime("%a, %b %d, %Y") )
    end
end

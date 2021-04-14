class CitiesController < ApplicationController

    def info
        # lat = params[:lat]
        # long = params[:long]
        # response = Unirest.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=#{lat},#{long}&key=#{ENV["GOOGLE_MAPS_API_KEY"]}")
        # puts "*****"
        # puts response.body["results"][0]["address_components"]
        # puts "*****"
        # render json: response.body["results"][0]["address_components"]
        @user = User.find(params[:id])
        @city = @user.next_city
        @user.passport.trips.create(city: @city, date_travelled: Time.now.strftime("%A %B %d, %Y") )
        render json: @city
    end

end

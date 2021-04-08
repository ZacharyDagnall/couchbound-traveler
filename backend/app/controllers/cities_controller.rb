class CitiesController < ApplicationController

    def info
        lat = params[:lat]
        long = params[:long]
        response = Unirest.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=#{lat},#{long}&key=#{ENV["GOOGLE_MAPS_API_KEY"]}")
        render json: response.body
    end

end

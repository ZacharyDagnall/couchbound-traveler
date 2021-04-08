class ApplicationController < ActionController::API

    def authenticate
        auth_header = request.headers["Authorization"]
        token = auth_header.split.last
        payload = JWT.decode(token, ENV["JWT_SECRET"], true, { algorithm: 'HS256' }).first
        @user = User.find_by(id: payload["user_id"])
      rescue
        render json: { errors: ["Unauthorized"] }, status: :unauthorized
    end

    # def clientID
    #   # yeah i guess it makes sense that this wouldn't work, otherwise i'd be breaking the secrecy that the ENV provides....
    #   render json: ENV["MAPILLARY_CLIENT_ID"]
    # end
    
end

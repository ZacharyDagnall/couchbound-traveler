Rails.application.routes.draw do
  
  get "/me", to: "users#me"
  post "/login", to: "users#login"
  post "/users", to: "users#create"
  patch "/username/:id", to: "users#update_username"
  patch "/password/:id", to: "users#update_password"

  get "/usertrips/:id", to: "users#trips"

  get "/clientID", to: "application#clientID"

  get "/city_info/:id", to: "cities#info"

  delete "/trips/:id", to: "trips#delete"

  post "/stamp/:id", to: "trips#create"

end

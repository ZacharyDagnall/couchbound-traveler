Rails.application.routes.draw do
  # resources :trips
  # resources :passports
  # resources :cities
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/me", to: "users#me"
  post "/login", to: "users#login"
  post "/users", to: "users#create"

  get "/trips/:id", to: "users#trips"

  # get "/clientID", to: "application#clientID"

  post "/city_info", to: "cities#info"

end

Rails.application.routes.draw do
  
  resources :reviews
  resources :users, except: [:create] 
  resources :trails
  post "/login", to: "sessions#login"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#logout"
  get "/authorized_user", to: "users#show"
  get "/average_ratings", to: "trails#average_ratings"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

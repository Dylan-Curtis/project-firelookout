Rails.application.routes.draw do
  resources :reviews, only: [:create, :index]
  resources :users, except: [:create] 
  resources :trails
  resources :likes
  post "/login", to: "sessions#login"
  post "/signup", to: "users#create"
  post "/new-review", to: "reviews#create"
  post '/like-trail', to: 'likes#toggle_like'
  delete "/logout", to: "sessions#logout"
  get "/authorized_user", to: "users#show"
  get "/average_ratings", to: "trails#average_ratings"
  get '/likes/:user_id/liked_trails', to: 'likes#liked_trails', as: 'liked_trails'
  get '/reviews/:user_id', to: 'reviews#index'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
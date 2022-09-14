Rails.application.routes.draw do
  
  resources :reviews
  resources :listings
  resources :owners
  resources :users

  get '/signup', to: "users#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

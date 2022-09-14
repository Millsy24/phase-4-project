Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  resources :reviews
  resources :listings
  resources :owners
  resources :users

  get '/signup', to: "users#create"
  get '/me', to: "users#show"
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

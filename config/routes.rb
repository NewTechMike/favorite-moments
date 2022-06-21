Rails.application.routes.draw do
  resources :moments, only: [:create, :show, :index, :destroy, :update]
  resources :users 

  post '/signup', to: "users#create"

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"
  
  get '/hello', to: 'application#hello_world'
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
    
end

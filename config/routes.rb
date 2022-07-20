Rails.application.routes.draw do
  resources :moment_feels
  resources :feels, only: [:show, :index, :create]
  resources :moments, only: [:create, :show, :index, :destroy, :update]
  resources :users 

  get '/moments/:moment_id/feels', to: "feels#show"


  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"
  
  get '/hello', to: 'application#hello_world'
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
    
end

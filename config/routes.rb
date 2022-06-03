Rails.application.routes.draw do
  resources :moments, only: [:create, :show, :index, :destroy, :update]
  resources :users 

  get '/me', to: "users#show"
  post '/moments', to: "moments#create"
  get '/me/:user_id/moments', to: "moments#index" 
  

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
  get '/hello', to: 'application#hello_world'
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
    
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end

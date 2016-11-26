Rails.application.routes.draw do
  resources :islands, only: :index
  root 'islands#index'
  resources :test_ocean, only: :index
end

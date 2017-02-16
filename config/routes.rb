Rails.application.routes.draw do
  root 'islands#index'
  resources :test_oceans, only: :index
  namespace :api, defaults: { format: 'json' } do
    resources :oceans, only: :index
  end
end

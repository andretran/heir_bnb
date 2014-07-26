HeirBnb::Application.routes.draw do
    root to: 'static_pages#root'

    resources :users
    resource :session

    namespace :api, defaults: {format: :json} do
      resources :spaces
      resources :bookings, only: [:create, :update, :destroy]
      resources :reviews, only: [:create, :update, :destroy]
    end
end

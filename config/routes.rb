HeirBnb::Application.routes.draw do
    root to: 'static_pages#root'

    resource :user
    resource :session

    namespace :api, defaults: {format: :json} do
      resources :spaces
      resources :bookings, only: [:create, :update, :destroy]
    end
end

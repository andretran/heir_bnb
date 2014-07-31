HeirBnb::Application.routes.draw do
    root to: 'static_pages#root'

    resources :users
    resource :session

    namespace :api, defaults: {format: :json} do
      resources :spaces
      resources :bookings, only: [:create, :update, :destroy, :index]
      put 'bookings/accept/:id' => 'bookings#accept'
      put 'bookings/decline/:id' => 'bookings#decline'
      resources :reviews, only: [:create, :update, :destroy]
    end
end

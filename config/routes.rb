HeirBnb::Application.routes.draw do
    root to: 'static_pages#root'

    resources :users
    resource :session

    namespace :api, default: {format: :json} do
    end
end

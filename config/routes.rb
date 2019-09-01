Rails.application.routes.draw do
  resources :dashboards
  #resources :users
  get '/user' => "users#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/test" => "test#new"
  #get "/auth/google/callback" => "session#googleAuth"
  get '/auth/github', to: 'authentication#github', format: false
end

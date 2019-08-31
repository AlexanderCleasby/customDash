Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/test" => "test#new"
  get "/auth/google/callback" => "session#googleAuth"
end

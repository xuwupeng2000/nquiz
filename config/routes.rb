Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :teams, except: [:show] do 
    resources :quiz_sessions, only: [:index, :new, :create, :destroy]
  end

  root to: "teams#index"
end

require pry
class SessionController < ApplicationController
    private

    def googleAuth
      request.env['omniauth.auth']
      binding.pry
    end
end

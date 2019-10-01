class SessionController < ApplicationController
    private

    def googleAuth
      request.env['omniauth.auth']
    end
end

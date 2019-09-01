class TestController < ApplicationController
    before_action :authenticate_user!
    def new
        
        foo = {foo:current_user}
        render :json => foo
    end
    
end

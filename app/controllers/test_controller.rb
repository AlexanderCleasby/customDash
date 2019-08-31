class TestController < ApplicationController
    def new
        
        foo = {foo:"bar"}
        render :json => foo
    end
    
end

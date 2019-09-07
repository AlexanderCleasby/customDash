class DashboardsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_dashboard, only: [:show, :update, :destroy]
  #wrap_parameters :dashboard, include: [:widgets]

  # GET /dashboards
  def index
    @dashboards = current_user.dashboards

    render json: @dashboards
  end

  # GET /dashboards/1
  def show
    render json: @dashboard
  end

  # POST /dashboards
  def create

    @dashboard = Dashboard.new(dashboard_params)
    @dashboard.user = current_user

    
    #binding.pry

    params[:widgets].each do |widget| 
      @widget = Widget.new({widget_type:widget[:type],ops:widget[:ops]})
      @widget.dashboard=@dashboard
      if !@widget.save
        render json: @widget.errors, status: :unprocessable_entity
      end
    end

    if @dashboard.save
      render json: @dashboard, status: :created, location: @dashboard
    else
      render json: @dashboard.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dashboards/1
  def update
    if @dashboard.update(dashboard_params)
      render json: @dashboard
    else
      render json: @dashboard.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dashboards/1
  def destroy
    @dashboard.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dashboard
      @dashboard = Dashboard.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dashboard_params
      #params.require(:dashboard).permit!
      params.require(:dashboard).permit(:user,:name,:height,:width)
    end
end

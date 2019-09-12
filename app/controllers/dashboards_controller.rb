class DashboardsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_dashboard, only: [:show, :update, :destroy]
  #wrap_parameters :dashboard, include: [:widgets]

  # GET /dashboards
  def index
    @dashboards = current_user.dashboards
    render json: @dashboards, each_serializer: DashboardSummarySerializer  
  end

  # GET /dashboards/1
  def show
    render json: @dashboard
  end

  # POST /dashboards
  def create

    @dashboard = Dashboard.new(dashboard_params)
    @dashboard.user = current_user

    params[:widgets].each do |widget| 
      widget.permit!
      @widget = Widget.new(widget)
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
      retained_ids=[]
      params[:widgets].each do |widget|
        widget.permit!
        if Widget.find_by({id:widget[:id]})
          @widget=Widget.find(widget[:id])
          if @widget.update(widget)
            retained_ids.push(@widget.id)
          end
        else
          widget = widget.except("id")
          @widget = Widget.new(widget)
          @widget.dashboard=@dashboard
          if @widget.save
            retained_ids.push(@widget.id)
          end
        end
      end
      
      @dashboard.widgets.each do |widget| 
        if !retained_ids.include?(widget.id) then
          widget.delete
        end
      end
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

class MomentFeelsController < ApplicationController

  def create
    momentFeels = MomentFeel.create(moment_id: params[:moment_id], feel_id: params[:feel_id])
    render json: momentFeels, status: :created
  end 

  #def index 
   # render json: MomentFeel.all
  #end 

end

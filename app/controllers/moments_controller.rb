class MomentsController < ApplicationController

  def create
    moment = Moment.create!(moments_params)
    render json: moment, status: :created
  end
  
=begin
  def index
    moments = Moment.all
    render json: moments
  end

  def show
    moment = Moment.find_by(id: params[:moment_id])
    render json: moment
  end 

  def update
  end 

  def destroy
    moment = Moment.find_by(id: params[:moment_id])
    moment.delete 
    head :no_content
  end
=end

  private
  
  def moments_params
    params.permit(:category, :title, :moment)
  end 

end

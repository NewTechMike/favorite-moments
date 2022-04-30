class MomentsController < ApplicationController
  before_action :authorize#, only: [:create]

  def create
    #user = User.find_by(id: session[:user_ id])
    moment = current_user.moments.create!(moment_params)
    if moment.valid?
      render json: moment, status: :created
    else 
      render json: { error: moment.errors.full_messages }, status: :unprocessable_entity
    end 
  end

  def show
    byebug
    moment = Moment.find_by(id: params[:id])
    render json: moment
  end 

  def index
    byebug
    moments = current_user.moments
    render json: moments
  end
=begin
 

  def update
  end 

  def destroy
    moment = Moment.find_by(id: params[:moment_id])
    moment.delete 
    head :no_content
  end
=end

  private
  
  def current_user
    User.find_by(id: session[:user_id])
  end 

  def moment_params
    params.permit(:category, :title, :moment)
  end 

end

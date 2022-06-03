class MomentsController < ApplicationController
  before_action :authorize, only: [:create]

  def create
    moment = current_user.moments.create(moment_params)
    #byebug
    if moment.valid?
      render json: moment, status: :created
    else 
      render json: { errors: moment.errors.full_messages }, status: :unprocessable_entity
    end 
  end

  def show
    #byebug
    moment = current_user.moments.find_by(id: params[:id])
    if moment
      render json: moment
    else
      render json: { error: "Not found" }, status: :unauthorized
    end
  end 

  def index
    moments = current_user.moments
    render json: moments
  end
  
  def destroy
    moment = Moment.find_by(id: params[:id])
    moment.destroy 
    head :no_content
  end
  
  def update
    moment = Moment.find_by(id: params[:id])
    if moment
      moment.update(moment_params)
      #byebug
      render json: moment
    else
      render json: { error: "Moment not found" }, status: :not_found
    end
  end 

  private
  
  def current_user
    User.find_by(id: session[:user_id])
  end 

  def moment_params
    params.permit(:category, :title, :moment)
  end 

end

class MomentsController < ApplicationController
  before_action :authorize, only: [:create]

  def create
    moment = current_user.moments.create(moment_params)
    if moment.valid?
      render json: moment, status: :created
    else 
      render json: { errors: moment.errors.full_messages }, status: :unprocessable_entity
    end 
  end

  def show
    moment = current_user.moments.find_by(id: params[:id])
    if moment
      render json: moment
    else
      render json: { error: "Not found" }, status: :unauthorized
    end
  end 

  def moment_feels_index 
    #byebug
    moment = Moment.find_by(id: params[:moment_id])
    feel = moment.feels.all
    if feel
      render json: feel, include: :emotion_name
    else
      render json: {error: "Feel Not Found"}, status: :not_found
    end 
  end 

 # def moment_feels_create
  #  moment = Moment.find_by(id: params[:moment_id])
    #byebug
   # feel = moment.feels.create(emotion_name: params[:emotion_name])
    #render json: feel, status: :created
  #end 


  def index
    #byebug
    moments = current_user.moments
    render json: moments.order(:id)
  end
  
  def destroy
    this_moment.destroy 
    head :no_content
  end
  
  def update
    if this_moment
      this_moment.update(moment_params)
      render json: this_moment
    else
      render json: { error: "Moment not found" }, status: :not_found
    end
  end 

  private
  
  def this_moment
    return moment = Moment.find_by(id: params[:id])
  end 

  def current_user
    User.find_by(id: session[:user_id])
  end 

  def moment_params
    params.permit(:title, :category, :moment)
  end 

end

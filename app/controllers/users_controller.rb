class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid_response
  before_action :authorize, only: [:show]

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end 

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end 

  private 

  def render_record_invalid_response(e)
    return render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  end 

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end 
end

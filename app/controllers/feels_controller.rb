class FeelsController < ApplicationController

  def index
    #byebug
    feels = Feel.all
    render json: feels 
  end 

  def show 
    moment = Moment.find_by(id: params[:moment_id])
    feel = moment.feels.first
    if feel
      render json: feel, include: :emotion_name
    else
      render json: {error: "Feel Not Found"}, status: :not_found
    end 
  end 

  def create
    moment = Moment.find_by(id: params[:id])
    feel = moment.feels.create(emotion_name: params[:emotion_name])
    render json: feel, status: :created
  end 

end

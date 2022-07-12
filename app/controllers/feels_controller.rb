class FeelsController < ApplicationController

  def index
    render json: Feel.all 
  end 

  def show 
    feel = Feel.find_by(id: params[:id])
    render json: feel, include: :moment
  end 

  def create
    moment = Moment.find_by(id: params[:id])
    feel = moment.feel.create(emotion_name: params[:emotion_name])
    render json: feel, status: :created
  end 

end

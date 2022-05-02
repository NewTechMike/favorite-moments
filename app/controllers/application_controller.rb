class ApplicationController < ActionController::API
  include ActionController::Cookies

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end


  def authorize
    #user = User.find_by(id: session[:user_id])
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end 
end

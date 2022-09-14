class UsersController < ApplicationController
    skip_before_action :authorized, only: :show
    def index
        render json: User.all, status: :ok
    end

    def show
        current_user = User.find(session[:user_id])
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "No current session stored"}, status: :unauthorized
        end
    end

    def create
        
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: user.errors.full_messages
        end
    end


    private 

    def user_params

        params.permit(:name, :email, :password, :dob, :phone)
    end
end

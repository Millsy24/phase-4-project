class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: user.erros.full_messages
        end
    end


    private 

    def user_params

        params.permit(:name, :email, :password_digest, :dob, :phone)
    end
end

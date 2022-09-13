class OwnersController < ApplicationController
    def index
        render json: Owner.all, status: :ok
    end

    def show
        owner = Owner.find(params[:id])
        render json: owner, status: :ok
    end
end

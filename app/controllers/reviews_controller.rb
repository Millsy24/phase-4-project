class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
    end


    private

    def review_params
        params.permit(:listing_id, :user_id,:rating, :content)
    end


end

module Api
  class ReviewsController < ApiController
    def create
      @review = Review.new(review_params)
      if @review.save
        render json: @review
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @review = Review.find(params[:id])
      @review.try(:destroy)
      render json: {}
    end


    # def update
    #
    # end

    private

    def review_params
      params.require(:review).permit(:text, :reviewable_id, :reviewable_type)
    end
  end
end

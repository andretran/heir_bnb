module Api
  class SpacesController < ApiController
    def create
      @space = current_user.spaces.new(space_params)

      if @space.save
        render json: @space
      else
        render json: @space.errors.full_messages, status: :unprocessable_entity
      end
    end

    # def destroy
    #   @space = current_user.spaces.find(params[:id])
    #   @space.try(:destroy)
    #   render json: {}
    # end
    #
    def index
      @spaces = Space.all
      render json: @spaces
    end

    #
    # def show
    #   @board = Board.includes(:members, lists: :cards).find(params[:id])
    #
    #   if @board.is_member?(current_user)
    #     render :show
    #   else
    #     render json: ["You aren't a member of this board"], status: 403
    #   end
    # end

    private

    def space_params
      params.require(:space).permit(:title, :description, :price)
    end
  end
end

module Api
  class SpacesController < ApiController
    wrap_parameters include: [:photo_preview, :title, :description, :price, :filename, :location]
    def create
      @space = current_user.spaces.new(space_params)
      if @space.save
        render json: @space
      else
        render json: ['One or more frields are empty, please check again.'] , status: :unprocessable_entity
      end
    end

    def destroy
      @space = current_user.spaces.find(params[:id])
      @space.try(:destroy)
      render json: {}
    end

    def index
      @spaces = Space.all
      render :index
    end


    def update
      @space = Space.find(params[:id])
      if @space.update_attributes(space_params)
          render json: @space
      else
        render json: @space.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @space = Space.includes(:user, :bookings).find(params[:id])

      if @space
        render :show
      else
        render json: ["Space Not Found"], status: 403
      end
    end

    private

    def space_params
      params.require(:space).permit(:title, :description, :price, :photo_preview, :filename, :location)
    end
  end
end

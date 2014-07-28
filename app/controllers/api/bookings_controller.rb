module Api
  class BookingsController < ApiController
    def create
      @booking = current_space.bookings.new(booking_params);
      @booking.user_id = current_user.id
      if @booking.save
        render json: @booking
      else
        render json: @booking.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @booking = Booking.find(params[:id])
      @booking.try(:destroy)
      render json: {}
    end

    def accept
      @booking = Booking.find(params[:id])
      @booking.approve!
      render json: @booking
    end

    def decline
      @booking = Booking.find(params[:id])
      @booking.deny!
      render json: @booking
    end

    # def update
    # end

    private

    def current_space
      @space = Space.find(params[:booking][:space_id])
    end

    def booking_params
      params.require(:booking).permit(:check_in, :check_out)
    end
  end
end

class BookingsController < ApplicationController
  def create
    @booking = current_space.bookings.new(booking_params)
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

  # def update
  # end

  private

  def current_space
    if params[:id]
      @booking = Booking.find(params[:id])
      @space = @booking.space
    elsif params[:booking]
      @space = Space.find(params[:booking][:space_id])
    end
  end

  def booking_params
    params.require(:booking).permit(:check_in, :check_out)
  end
end

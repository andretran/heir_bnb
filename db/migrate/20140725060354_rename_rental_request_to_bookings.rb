class RenameRentalRequestToBookings < ActiveRecord::Migration
  def change
    rename_table :rental_requests, :bookings
  end
end

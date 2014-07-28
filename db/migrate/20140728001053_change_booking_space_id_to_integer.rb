class ChangeBookingSpaceIdToInteger < ActiveRecord::Migration
  def change
    remove_column :bookings, :space_id, :string
    add_column :bookings, :space_id, :integer
  end
end

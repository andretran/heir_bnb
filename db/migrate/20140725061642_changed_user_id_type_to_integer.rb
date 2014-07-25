class ChangedUserIdTypeToInteger < ActiveRecord::Migration
  def change
    remove_column :bookings, :user_id, :string
    add_column :bookings, :user_id, :integer
  end
end

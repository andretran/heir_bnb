class CreateRentalRequests < ActiveRecord::Migration
  def change
    create_table :rental_requests do |t|
      t.string :space_id, null: false
      t.string :status, null: false
      t.string :user_id, null: false 
      t.date :check_in, null: false
      t.date :check_out, null: false

      t.timestamps
    end
  end
end

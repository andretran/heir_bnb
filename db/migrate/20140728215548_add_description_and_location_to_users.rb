class AddDescriptionAndLocationToUsers < ActiveRecord::Migration
  def change
    add_column :users, :description, :text
    add_column :users, :location, :string
  end
end

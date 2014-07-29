class LatToSpaces < ActiveRecord::Migration
  def change
    add_column :spaces, :location, :string
    add_column :spaces, :longitude, :decimal
    add_column :spaces, :latitude, :decimal
  end
end

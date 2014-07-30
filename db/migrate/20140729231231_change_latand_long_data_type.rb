class ChangeLatandLongDataType < ActiveRecord::Migration
  def change
    remove_column :spaces, :longitude, :decimal
    add_column :spaces, :longitude, :float

    remove_column :spaces, :latitude, :decimal
    add_column :spaces, :latitude, :float

  end
end

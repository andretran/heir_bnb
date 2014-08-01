class CreateAboutColumnForSpaces < ActiveRecord::Migration
  def change
    create_table :about_column_for_spaces do |t|
      add_column :spaces, :about, :text
    end
  end
end

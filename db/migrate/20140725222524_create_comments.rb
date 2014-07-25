class CreateComments < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :text, null: false
      t.integer :author_id, null: false
      t.integer :reviewable_id, null: false
      t.string :reviewable_type, null: false

      t.timestamps
    end
  end
end

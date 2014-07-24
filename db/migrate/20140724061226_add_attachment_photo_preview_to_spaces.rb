class AddAttachmentPhotoPreviewToSpaces < ActiveRecord::Migration
  def self.up
    change_table :spaces do |t|
      t.attachment :photo_preview
    end
  end

  def self.down
    remove_attachment :spaces, :photo_preview
  end
end

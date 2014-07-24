# == Schema Information
#
# Table name: spaces
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  description :text             not null
#  price       :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Space < ActiveRecord::Base
  attr_accessor :filename
  validates :title, :description, :price, :user_id, presence: true

  belongs_to :user
  has_attached_file :photo_preview, :styles => { :big => "600x600>", :small => "50x50#" }
  validates_attachment_content_type :photo_preview, :content_type => /\Aimage/
  # validates_attachment_file_name :photo_preview, :matches => [/jpe?g\Z/]
  validates_attachment :photo_preview, :presence => true

  before_create :set_filename

  def set_filename
    self.photo_preview.instance_write(:file_name, self.filename);
  end

end

# == Schema Information
#
# Table name: spaces
#
#  id                         :integer          not null, primary key
#  title                      :string(255)      not null
#  description                :text             not null
#  price                      :integer          not null
#  user_id                    :integer          not null
#  created_at                 :datetime
#  updated_at                 :datetime
#  photo_preview_file_name    :string(255)
#  photo_preview_content_type :string(255)
#  photo_preview_file_size    :integer
#  photo_preview_updated_at   :datetime
#  location                   :string(255)
#  longitude                  :decimal(, )
#  latitude                   :decimal(, )
#

class Space < ActiveRecord::Base
  LOCATIONS = {"King's Landing, Westeros" => [-60.029296875,-35.46066995149529],
                  "Crossroads Inn, Westeros" => [-72.861328125,-2.460181181020993],
                  "Winterfell, Westeros" => [-92.548828125, 70.72897946208789],
                  "Castleblack, Westeros" => [-68.818359375, 82.72096436126803],
                  "Casterly Rock, Westeros" => [-144.228515625, -25.48295117535531],
                  "Pentos, Essos" => [16.962890625, -37.85750715625204]
                  "Highgarden, Westeros" => [-124.189453125, -62.91523303947613]
              }
  attr_accessor :filename
  validates :title, :description, :price, :user_id, :location,
          :latitude, :longitude, presence: true
  validates :location, inclusion: LOCATIONS.keys

  has_many :bookings, dependent: :destroy
  has_many :reviews, as: :reviewable


  belongs_to :user
  has_attached_file :photo_preview, :styles => { :big => "650x500>",
                                                 :small => "450x300#",
                                                 :xs => "300x150" }
  validates_attachment_content_type :photo_preview, :content_type => /\Aimage/
  validates_attachment :photo_preview, :presence => true
  before_create :set_filename
  before_validation :assign_random_coords


  def set_filename
    self.photo_preview.instance_write(:file_name, self.filename);
  end

  private

  def assign_random_coords
    unless LOCATIONS.include?(self.location)
      self.longitude = LOCATIONS[self.location][0] + self.generate_random_coord
      self.latitude = LOCATIONS[self.location][1] + self.generate_random_coord
    else
      self.longitude = self.generate_random_coord
      self.latitude = self.generate_random_coord
    end
  end

  def generate_random_coord
    rand(-5.0..5.0)
  end
end

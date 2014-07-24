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
  validates :title, :description, :price, :user_id, presence: true

  belongs_to :user
end

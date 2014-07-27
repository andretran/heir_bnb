# == Schema Information
#
# Table name: reviews
#
#  id              :integer          not null, primary key
#  text            :text             not null
#  author_id       :integer          not null
#  reviewable_id   :integer          not null
#  reviewable_type :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class Review < ActiveRecord::Base
  validates :text, :author_id, :reviewable_id, :reviewable_type, presence: true

  belongs_to :reviewable, polymorphic: true
  belongs_to :author, class_name: 'User'
end

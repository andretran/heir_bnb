# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  text             :string(255)      not null
#  author_id        :integer          not null
#  commentable_id   :integer          not null
#  commentable_type :string(255)      not null
#  created_at       :datetime
#  updated_at       :datetime
#

class Review < ActiveRecord::Base
  validates :text, :author_id, :reviewable_id, :reviewable_type, presence: true

  belongs_to :reviewable, polymorphic: true
  belongs_to :author, class_name: 'User'
end

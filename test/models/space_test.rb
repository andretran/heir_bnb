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

require 'test_helper'

class SpaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

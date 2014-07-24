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

require 'test_helper'

class SpaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

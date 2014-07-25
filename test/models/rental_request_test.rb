# == Schema Information
#
# Table name: rental_requests
#
#  id         :integer          not null, primary key
#  space_id   :string(255)      not null
#  integer    :string(255)      not null
#  status     :string(255)      not null
#  check_in   :date             not null
#  check_out  :date             not null
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class RentalRequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

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

class RentalRequest < ActiveRecord::Base
  STATUS_STATES = %w(APPROVED DENIED PENDING)

  validates :check_in, :check_out, :space_id, :status, presence: true
  validate :does_not_overlap_approved_request
  belongs_to :space

  after_initialize :assign_pending_status

  def approve!
    raise "not pending" unless self.status == "PENDING"
    transaction do
      self.status = "APPROVED"
      self.save!

      # when we approve this request, we reject all other overlapping
      # requests for this cat.
      overlapping_pending_requests.update_all(status: 'DENIED')
    end
  end

  def approved?
    self.status == "APPROVED"
  end

  def denied?
    self.status == "DENIED"
  end

  def deny!
    self.status = "DENIED"
    self.save!
  end

  def pending?
    self.status == "PENDING"
  end

  private

  def assign_pending_status
    self.status ||= "PENDING"
  end


  def overlapping_approved_requests
    overlapping_requests.where(" status = 'APPROVED'")
  end

  def overlapping_requests
    RentalRequest.where("(:id IS NULL) OR (id != :id)", id: self.id)
                 .where(space_id: space_id)
                 .where(<<-SQL, check_in: check_in, check_out: check_out)
                      ((check_in BETWEEN :check_in AND :check_out) OR
                        (check_out BETWEEN :check_in AND :check_out)) OR
                      ((:check_in BETWEEN check_in AND check_out) OR
                        (:check_out BETWEEN check_in AND check_out))
                          SQL
  end

  def does_not_overlap_approved_request
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] << "Those dates are not available"
    end
  end
end

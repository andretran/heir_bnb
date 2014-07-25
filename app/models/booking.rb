# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  space_id   :string(255)      not null
#  status     :string(255)      not null
#  check_in   :date             not null
#  check_out  :date             not null
#  created_at :datetime
#  updated_at :datetime
#  user_id    :integer
#

class Booking < ActiveRecord::Base
  STATUS_STATES = %w(APPROVED DENIED PENDING)

  validates :check_in, :check_out, :space_id, :status, presence: true
  # validate :does_not_overlap_approved_booking
  validates :status, inclusion: STATUS_STATES

  belongs_to :user
  belongs_to :space

  after_initialize :assign_pending_status

  def approve!
    raise "not pending" unless self.status == "PENDING"
    transaction do
      self.status = "APPROVED"
      self.save!
      overlapping_pending_bookings.update_all(status: 'DENIED')
    end
  end

  def deny!
    self.status = "DENIED"
    self.save!
  end

  def approved?
    self.status == "APPROVED"
  end

  def denied?
    self.status == "DENIED"
  end

  def pending?
    self.status == "PENDING"
  end

  private

  def assign_pending_status
    self.status ||= "PENDING"
  end


  def overlapping_approved_bookings
    overlapping_bookings.where(" status = 'APPROVED'")
  end

  def overlapping_bookings
    Booking.where("(:id IS NULL) OR (id != :id)", id: self.id)
                 .where(space_id: space_id)
                 .where(<<-SQL, check_in: check_in, check_out: check_out)
                      ((check_in BETWEEN :check_in AND :check_out) OR
                        (check_out BETWEEN :check_in AND :check_out)) OR
                      ((:check_in BETWEEN check_in AND check_out) OR
                        (:check_out BETWEEN check_in AND check_out))
                          SQL
  end

  def does_not_overlap_approved_booking
    return if self.denied?

    unless overlapping_approved_bookings.empty?
      errors[:base] << "Those dates are not available"
    end
  end
end

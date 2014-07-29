# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  first_name          :string(255)      not null
#  last_name           :string(255)      not null
#  email               :string(255)      not null
#  password_digest     :string(255)      not null
#  session_token       :string(255)      not null
#  created_at          :datetime
#  updated_at          :datetime
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  description         :text
#  location            :string(255)
#

class User < ActiveRecord::Base
  validates :email, :session_token, :first_name, :last_name, presence: true


  has_many :reviews, as: :reviewable, dependent: :destroy
  has_many :bookings, dependent: :destroy
  has_many :spaces, dependent: :destroy
  has_many :requests, through: :spaces, source: :bookings
  has_attached_file :avatar, :styles => {
                                  :big => "230x230>",
                                  :medium => "90x90",
                                  :small => "60x60",
                                  :xs => "28x28" },
                                  :default_url => ActionController::Base.helpers.asset_path("assets/default_:style.png")
  validates_attachment_content_type :avatar, :content_type => /\Aimage/
  # validates_attachment :avatar, :presence => true

  # before_save :set_filename


  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def set_filename(filename)
    self.avatar.instance_write(:file_name, filename);
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end



  protected

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end

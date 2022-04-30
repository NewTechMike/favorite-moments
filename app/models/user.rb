class User < ApplicationRecord
  has_secure_password
  
  validates :username, :password, :password_confirmation, presence: true, uniqueness: true
  has_many :moments
end

class Moment < ApplicationRecord
  belongs_to :user

  has_many :moment_feels
  has_many :feels, through: :moment_feels, dependent: :destroy

  validates :category, :title, presence: true 
  validates :moment, presence: true, length: { minimum: 10 }
end

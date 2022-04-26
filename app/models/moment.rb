class Moment < ApplicationRecord
  belongs_to :user

  validates :category, presence: true 
  validates :title, presence: true 
  validates :moment, presence: true, length: { minimum: 20 }
end

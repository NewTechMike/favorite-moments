class Moment < ApplicationRecord
  belongs_to :user

  validates :category, :title, presence: true 
  validates :moment, presence: true, length: { minimum: 10 }
end

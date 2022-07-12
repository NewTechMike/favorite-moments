class Feel < ApplicationRecord

  has_many :moment_feels
  has_many :moments, through: :moment_feels

end

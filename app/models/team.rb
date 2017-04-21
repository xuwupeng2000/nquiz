class Team < ApplicationRecord
  has_many :quiz_sessions, dependent: :delete_all
  has_one :auth_token
  validates_uniqueness_of :name
  validates_numericality_of :pass

end

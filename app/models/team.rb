class Team < ApplicationRecord
  has_many :quiz_sessions, dependent: :delete_all
  has_one :auth_token

  validates_presence_of :name
  validates_uniqueness_of :name
  validates_numericality_of :pass
  validates_length_of :pass, maximum: 4
  validates_length_of :pass, minimum: 4
end

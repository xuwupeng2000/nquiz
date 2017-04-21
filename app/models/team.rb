class Team < ApplicationRecord
  has_many :quiz_sessions, dependent: :delete_all
  validates_uniqueness_of :name
end

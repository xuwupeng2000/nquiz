class Team < ApplicationRecord
  has_many :quiz_sessions, dependent: :delete_all
  has_one :auth_token

  validates_presence_of :name, :description
  validates_uniqueness_of :name
  validates_numericality_of :pass, only_integer: true, message: 'It is like you bank password, 4 numbers, NO trick there'
  validates_length_of :pass, maximum: 4
  validates_length_of :pass, minimum: 4
end

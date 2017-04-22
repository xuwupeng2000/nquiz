class Team < ApplicationRecord
  include BCrypt

  has_many :quiz_sessions, dependent: :delete_all
  has_one :auth_token

  validates_presence_of :name, :description
  validates_uniqueness_of :name
  validate :valid_password

  attr_accessor :password
  attr_accessor :pass_number

  def password
    Password.new(pass)
  end

  def password=(new_password)
    self.pass_number = new_password
    self.pass = Password.create(new_password)
  end

  private

  def valid_password
    range = %w( 1 2 3 4 5 6 7 8 9 0 )

    errors.add(:base, 'You need enter a password') unless pass_number

    if pass_number
      errors.add(:base, 'Passwod is like bank pass, 4 numbers') unless pass_number.size == 4
      pass_number.each_char do |number|
        errors.add(:base, 'Passwod is like bank pass, you should only enter numbers!') unless range.include? number
      end
    end
  end
end

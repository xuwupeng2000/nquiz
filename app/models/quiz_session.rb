class QuizSession < ApplicationRecord
  belongs_to :team

  validates_presence_of :total_quiz_number, :correct_quiz_number
  validate :max_correct_quiz_number

  def max_correct_quiz_number
    return unless total_quiz_number && correct_quiz_number

    errors.add(:base, 'Number does not add up!') if correct_quiz_number > total_quiz_number
  end
end

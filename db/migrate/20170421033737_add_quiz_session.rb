class AddQuizSession < ActiveRecord::Migration[5.0]
  def change
    create_table :quiz_sessions do |t|
      t.integer :total_quiz_number
      t.integer :correct_quiz_number
 
      t.timestamps
    end
  end
end

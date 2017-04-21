class AddTeam < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.text :description
      t.text :pass
 
      t.timestamps
    end
  end
end

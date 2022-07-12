class CreateMomentFeels < ActiveRecord::Migration[7.0]
  def change
    create_table :moment_feels do |t|
      t.integer :moment_id
      t.integer :feel_id

      t.timestamps
    end
  end
end

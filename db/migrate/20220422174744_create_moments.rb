class CreateMoments < ActiveRecord::Migration[7.0]
  def change
    create_table :moments do |t|
      t.string :category
      t.string :title
      t.string :moment

      t.timestamps
    end
  end
end

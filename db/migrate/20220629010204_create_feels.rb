class CreateFeels < ActiveRecord::Migration[7.0]
  def change
    create_table :feels do |t|

      t.timestamps
    end
  end
end

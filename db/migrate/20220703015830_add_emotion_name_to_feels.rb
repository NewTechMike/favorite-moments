class AddEmotionNameToFeels < ActiveRecord::Migration[7.0]
  def change
    add_column :feels, :emotion_name, :string
  end
end

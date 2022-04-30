class AddUserIdToMoments < ActiveRecord::Migration[7.0]
  def change
    add_column :moments, :user_id, :integer
  end
end

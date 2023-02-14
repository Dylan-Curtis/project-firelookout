class AddLocationAndBodyToTrails < ActiveRecord::Migration[6.1]
  def change
    add_column :trails, :body, :string
    add_column :trails, :location, :string
  end
end

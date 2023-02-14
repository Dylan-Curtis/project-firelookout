class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.integer :elevation_gain
      t.integer :length

      t.timestamps
    end
  end
end

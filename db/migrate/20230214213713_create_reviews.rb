class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :body
      t.string :condition
      t.integer :rating
      # t.string :photo
      t.text :content
      t.references :trail, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
    add_index :reviews, [:user_id, :trail_id], unique: true
  end
end

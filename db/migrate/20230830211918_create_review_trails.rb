class CreateReviewTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :review_trails do |t|
      t.references :review, null: false, foreign_key: true
      t.references :trail, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class AddDateToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :date, :date
  end
end

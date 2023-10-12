class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :email
      t.text :blurb
      t.date :member_since
      t.integer :profile_icon

      t.timestamps
    end
  end
end

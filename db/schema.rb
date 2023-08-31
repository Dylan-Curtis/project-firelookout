# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_08_30_211918) do

  create_table "review_trails", force: :cascade do |t|
    t.integer "review_id", null: false
    t.integer "trail_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["review_id"], name: "index_review_trails_on_review_id"
    t.index ["trail_id"], name: "index_review_trails_on_trail_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body"
    t.string "condition"
    t.integer "rating"
    t.text "content"
    t.integer "trail_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trail_id"], name: "index_reviews_on_trail_id"
    t.index ["user_id", "trail_id"], name: "index_reviews_on_user_id_and_trail_id", unique: true
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "trails", force: :cascade do |t|
    t.string "name"
    t.integer "elevation_gain"
    t.float "length"
    t.string "image"
    t.string "map"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "body"
    t.string "location"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.string "email"
    t.text "blurb"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "review_trails", "reviews"
  add_foreign_key "review_trails", "trails"
  add_foreign_key "reviews", "trails"
  add_foreign_key "reviews", "users"
end

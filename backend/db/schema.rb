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

ActiveRecord::Schema.define(version: 2021_04_07_190055) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.string "flag_url"
    t.string "flag_emoji"
    t.string "continent"
    t.string "globe_emoji"
    t.string "country"
    t.string "state"
    t.jsonb "food"
    t.jsonb "language"
    t.jsonb "religion"
    t.jsonb "initial_greetings"
    t.jsonb "greetings"
    t.jsonb "dont_understand"
    t.jsonb "ok"
    t.jsonb "correct"
    t.string "image_key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "passports", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "photo_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_passports_on_user_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "date_travelled"
    t.bigint "passport_id", null: false
    t.bigint "city_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_id"], name: "index_trips_on_city_id"
    t.index ["passport_id"], name: "index_trips_on_passport_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "passports", "users"
  add_foreign_key "trips", "cities"
  add_foreign_key "trips", "passports"
end

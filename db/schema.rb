# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140801170156) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "about_column_for_spaces", force: true do |t|
  end

  create_table "bookings", force: true do |t|
    t.string   "status",     null: false
    t.date     "check_in",   null: false
    t.date     "check_out",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.integer  "space_id"
  end

  create_table "reviews", force: true do |t|
    t.text     "text",            null: false
    t.integer  "author_id",       null: false
    t.integer  "reviewable_id",   null: false
    t.string   "reviewable_type", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "spaces", force: true do |t|
    t.string   "title",                      null: false
    t.text     "description",                null: false
    t.integer  "price",                      null: false
    t.integer  "user_id",                    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_preview_file_name"
    t.string   "photo_preview_content_type"
    t.integer  "photo_preview_file_size"
    t.datetime "photo_preview_updated_at"
    t.string   "location"
    t.float    "longitude"
    t.float    "latitude"
    t.text     "about"
  end

  create_table "users", force: true do |t|
    t.string   "first_name",          null: false
    t.string   "last_name",           null: false
    t.string   "email",               null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.text     "description"
    t.string   "location"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end

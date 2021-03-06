# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_15_130215) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dashboards", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.integer "width"
    t.integer "height"
    t.index ["user_id"], name: "index_dashboards_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "login"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "avatar_url"
  end

  create_table "widgets", force: :cascade do |t|
    t.string "widget_type"
    t.json "ops"
    t.bigint "dashboard_id", null: false
    t.integer "x"
    t.integer "y"
    t.integer "width"
    t.integer "height"
    t.index ["dashboard_id"], name: "index_widgets_on_dashboard_id"
  end

  add_foreign_key "dashboards", "users"
  add_foreign_key "widgets", "dashboards"
end

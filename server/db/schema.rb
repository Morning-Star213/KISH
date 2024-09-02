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

ActiveRecord::Schema[7.0].define(version: 2024_03_28_003305) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "brands", force: :cascade do |t|
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.bigint "organization_id", null: false
    t.string "name", null: false, comment: "ブランド名"
    t.string "image", comment: "ロゴ"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_brands_on_organization_id"
    t.index ["uuid"], name: "index_brands_on_uuid"
  end

  create_table "categories", force: :cascade do |t|
    t.bigint "brand_id", null: false
    t.string "name", null: false, comment: "カテゴリー名称"
    t.integer "position", null: false, comment: "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_categories_on_brand_id"
  end

  create_table "colors", force: :cascade do |t|
    t.bigint "brand_id", null: false
    t.string "name", null: false, comment: "色"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_colors_on_brand_id"
  end

  create_table "conditions", force: :cascade do |t|
    t.bigint "brand_id", null: false
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.string "name", null: false, comment: "状態名"
    t.integer "trade_in_rate", comment: "買取価格割合"
    t.integer "resale_rate", comment: "再販価格割合"
    t.integer "position", null: false, comment: "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_conditions_on_brand_id"
    t.index ["uuid"], name: "index_conditions_on_uuid"
  end

  create_table "images", force: :cascade do |t|
    t.integer "resource_id", null: false
    t.string "resource_type", null: false
    t.string "image", null: false, comment: "画像"
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.bigint "order_id", null: false
    t.bigint "listing_id", null: false
    t.integer "price", comment: "金額"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_items_on_listing_id"
    t.index ["order_id"], name: "index_items_on_order_id"
    t.index ["uuid"], name: "index_items_on_uuid"
  end

  create_table "listings", force: :cascade do |t|
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.bigint "organization_id", null: false
    t.bigint "seller_id", null: false
    t.bigint "brand_id", null: false
    t.bigint "product_id", null: false
    t.bigint "condition_id"
    t.bigint "size_id"
    t.integer "status", default: 0, null: false, comment: "ステータス"
    t.integer "repair_method", default: 0, comment: "対応方針"
    t.integer "price", comment: "金額"
    t.text "comment", comment: "コメント"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_listings_on_brand_id"
    t.index ["condition_id"], name: "index_listings_on_condition_id"
    t.index ["organization_id"], name: "index_listings_on_organization_id"
    t.index ["product_id"], name: "index_listings_on_product_id"
    t.index ["seller_id"], name: "index_listings_on_seller_id"
    t.index ["size_id"], name: "index_listings_on_size_id"
    t.index ["uuid"], name: "index_listings_on_uuid"
  end

  create_table "orders", force: :cascade do |t|
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.bigint "brand_id", null: false
    t.integer "order_number", null: false, comment: "注文ID"
    t.integer "status", default: 0, null: false, comment: "ステータス"
    t.datetime "order_date", comment: "注文日時"
    t.integer "total_price", comment: "金額"
    t.integer "payment_status", default: 0, null: false, comment: "支払ステータス"
    t.integer "shipping_status", default: 0, null: false, comment: "配送ステータス"
    t.string "tracking_code", comment: "追跡番号"
    t.string "strage_location", comment: "保管場所"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_orders_on_brand_id"
    t.index ["uuid"], name: "index_orders_on_uuid"
  end

  create_table "organization_sellers", force: :cascade do |t|
    t.bigint "organization_id", null: false
    t.bigint "seller_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_organization_sellers_on_organization_id"
    t.index ["seller_id"], name: "index_organization_sellers_on_seller_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name", null: false, comment: "名称"
    t.string "image", comment: "ロゴ"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "product_master_categories", force: :cascade do |t|
    t.bigint "product_master_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_product_master_categories_on_category_id"
    t.index ["product_master_id"], name: "index_product_master_categories_on_product_master_id"
  end

  create_table "product_master_sizes", force: :cascade do |t|
    t.bigint "product_master_id", null: false
    t.bigint "size_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_master_id"], name: "index_product_master_sizes_on_product_master_id"
    t.index ["size_id"], name: "index_product_master_sizes_on_size_id"
  end

  create_table "product_masters", force: :cascade do |t|
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.bigint "organization_id", null: false
    t.bigint "brand_id", null: false
    t.string "code", comment: "品番"
    t.string "name", null: false, comment: "名称"
    t.text "description", comment: "説明"
    t.integer "sex", comment: "性別"
    t.text "care", comment: "ケア"
    t.integer "price", comment: "金額（税抜）"
    t.integer "price_tax", comment: "税額"
    t.integer "price_total", comment: "金額（税込）"
    t.string "year", comment: "年度"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_product_masters_on_brand_id"
    t.index ["organization_id"], name: "index_product_masters_on_organization_id"
    t.index ["uuid"], name: "index_product_masters_on_uuid"
  end

  create_table "product_sizes", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.bigint "size_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_product_sizes_on_product_id"
    t.index ["size_id"], name: "index_product_sizes_on_size_id"
  end

  create_table "products", force: :cascade do |t|
    t.bigint "organization_id", null: false
    t.bigint "brand_id", null: false
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.bigint "product_master_id", null: false
    t.bigint "color_id"
    t.integer "status", default: 0, null: false, comment: "ステータス"
    t.boolean "is_resale", default: false, null: false, comment: "リセール対象"
    t.boolean "is_archive", default: false, null: false, comment: "アーカイブ"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_products_on_brand_id"
    t.index ["color_id"], name: "index_products_on_color_id"
    t.index ["organization_id"], name: "index_products_on_organization_id"
    t.index ["product_master_id"], name: "index_products_on_product_master_id"
    t.index ["uuid"], name: "index_products_on_uuid"
  end

  create_table "sellers", force: :cascade do |t|
    t.uuid "uuid", default: -> { "uuid_generate_v4()" }, null: false
    t.string "name", comment: "名称"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uuid"], name: "index_sellers_on_uuid"
  end

  create_table "sizes", force: :cascade do |t|
    t.bigint "brand_id", null: false
    t.string "name", null: false, comment: "サイズ"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_sizes_on_brand_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false, comment: "email"
    t.string "password_digest"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.string "last_name", comment: "姓"
    t.string "first_name", comment: "名"
    t.integer "role", default: 0, null: false, comment: "権限"
    t.bigint "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["organization_id"], name: "index_users_on_organization_id"
  end

  add_foreign_key "brands", "organizations"
  add_foreign_key "categories", "brands"
  add_foreign_key "colors", "brands"
  add_foreign_key "conditions", "brands"
  add_foreign_key "items", "listings"
  add_foreign_key "items", "orders"
  add_foreign_key "listings", "brands"
  add_foreign_key "listings", "conditions"
  add_foreign_key "listings", "organizations"
  add_foreign_key "listings", "products"
  add_foreign_key "listings", "sellers"
  add_foreign_key "listings", "sizes"
  add_foreign_key "orders", "brands"
  add_foreign_key "organization_sellers", "organizations"
  add_foreign_key "organization_sellers", "sellers"
  add_foreign_key "product_master_categories", "categories"
  add_foreign_key "product_master_categories", "product_masters"
  add_foreign_key "product_master_sizes", "product_masters"
  add_foreign_key "product_master_sizes", "sizes"
  add_foreign_key "product_masters", "brands"
  add_foreign_key "product_masters", "organizations"
  add_foreign_key "product_sizes", "products"
  add_foreign_key "product_sizes", "sizes"
  add_foreign_key "products", "brands"
  add_foreign_key "products", "colors"
  add_foreign_key "products", "organizations"
  add_foreign_key "products", "product_masters"
  add_foreign_key "sizes", "brands"
  add_foreign_key "users", "organizations"
end

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    enable_extension 'pgcrypto'
    enable_extension 'uuid-ossp'

    create_table :organizations do |t|
      t.string :name, null: false, comment: '名称'
      t.string :image, comment: 'ロゴ'

      t.timestamps
    end

    create_table :brands do |t|
      t.uuid :uuid, null: false, default: "uuid_generate_v4()", index: true
      t.references :organization, null: false, foreign_key: true
      t.string :name, null: false, comment: 'ブランド名'
      t.string :image, comment: 'ロゴ'

      t.timestamps
    end

    create_table :sellers do |t|
      t.uuid :uuid, null: false, default: "uuid_generate_v4()", index: true
      t.string :name, comment: '名称'

      t.timestamps
    end

    create_table :organization_sellers do |t|
      t.references :organization, null: false, foreign_key: true
      t.references :seller, null: false, foreign_key: true

      t.timestamps
    end

    create_table :users do |t|
      t.string :email, null: false, index: { unique: true }, comment: 'email'
      t.string :password_digest
      t.string :confirmation_token
      t.datetime :confirmed_at
      t.string :last_name, comment: '姓'
      t.string :first_name, comment: '名'
      t.integer :role, null: false, default: 0, comment: '権限'
      t.references :organization, foreign_key: true

      t.timestamps
    end

    create_table :product_masters do |t|
      t.uuid :uuid, null: false, default: "uuid_generate_v4()", index: true
      t.references :organization, null: false, foreign_key: true
      t.references :brand, null: false, foreign_key: true
      t.string :code, comment: '品番'
      t.string :name, null: false, comment: '名称'
      t.text :description, comment: '説明'
      t.integer :sex, comment: '性別'
      t.text :care, comment: 'ケア'
      t.integer :price, comment: '金額（税抜）'
      t.integer :price_tax, comment: '税額'
      t.integer :price_total, comment: '金額（税込）'
      t.string :year, comment: '年度'

      t.timestamps
    end

    create_table :colors do |t|
      t.references :brand, null: false, foreign_key: true
      t.string :name, null: false, comment: '色'

      t.timestamps
    end

    create_table :sizes do |t|
      t.references :brand, null: false, foreign_key: true
      t.string :name, null: false, comment: 'サイズ'

      t.timestamps
    end

    create_table :categories do |t|
      t.references :brand, null: false, foreign_key: true
      t.string :name, null: false, comment: 'カテゴリー名称'
      t.integer :position, null: false, comment: 'position'

      t.timestamps
    end

    create_table :product_master_categories do |t|
      t.references :product_master, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end

    create_table :products do |t|
      t.references :organization, null: false, foreign_key: true
      t.references :brand, null: false, foreign_key: true
      t.uuid :uuid, null: false, default: "uuid_generate_v4()", index: true
      t.references :product_master, null: false, foreign_key: true
      t.references :color, foreign_key: true
      t.integer :status, null: false, default: 0, comment: 'ステータス'
      t.boolean :is_resale, null: false, default: false, comment: 'リセール対象'
      t.boolean :is_archive, null: false, default: false, comment: 'アーカイブ'
      t.integer :price

      t.timestamps
    end

    create_table :product_sizes do |t|
      t.references :product, null: false, foreign_key: true
      t.references :size, null: false, foreign_key: true

      t.timestamps
    end

    create_table :product_master_sizes do |t|
      t.references :product_master, null: false, foreign_key: true
      t.references :size, null: false, foreign_key: true

      t.timestamps
    end

    create_table :images do |t|
      t.integer :resource_id, null: false
      t.string :resource_type, null: false
      t.string :image, null: false, comment: '画像'
      t.string :title
      t.text :description

      t.timestamps
    end

    create_table :conditions do |t|
      t.references :brand, null: false, foreign_key: true
      t.uuid :uuid, null: false, default: "uuid_generate_v4()", index: true
      t.string :name, null: false, comment: '状態名'
      t.integer :trade_in_rate, comment: '買取価格割合'
      t.integer :resale_rate, comment: '再販価格割合'
      t.integer :position, null: false, comment: 'position'

      t.timestamps
    end

    create_table :listings do |t|
      t.uuid :uuid, null: false, default: "uuid_generate_v4()", index: true
      t.references :organization, null: false, foreign_key: true
      t.references :seller, null: false, foreign_key: true
      t.references :brand, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.references :condition, foreign_key: true
      t.references :size, foreign_key: true
      t.integer :status, null: false, default: 0, comment: 'ステータス'
      t.integer :repair_method, default: 0, comment: '対応方針'
      t.integer :price, comment: '金額'
      t.text :comment, comment: 'コメント'

      t.timestamps
    end

    create_table :orders do |t|
      t.uuid :uuid, null: false, default: "uuid_generate_v4()", index: true
      t.references :brand, null: false, foreign_key: true
      t.integer :order_number, null: false, comment: '注文ID'
      t.integer :status, null: false, default: 0, comment: 'ステータス'
      t.datetime :order_date, comment: '注文日時'
      t.integer :total_price, comment: '金額'
      t.integer :payment_status, null: false, default: 0, comment: '支払ステータス'
      t.integer :shipping_status, null: false, default: 0, comment: '配送ステータス'
      t.string :tracking_code, comment: '追跡番号'
      t.string :strage_location, comment: '保管場所'

      t.timestamps
    end

    create_table :items do |t|
      t.uuid :uuid, null: false, default: "uuid_generate_v4()", index: true
      t.references :order, null: false, foreign_key: true
      t.references :listing, null: false, foreign_key: true
      t.integer :price, comment: '金額'

      t.timestamps
    end

  end
end

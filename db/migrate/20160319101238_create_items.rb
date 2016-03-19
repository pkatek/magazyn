class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      
      t.string :name
      t.string :sn, default: 0, null: false
      t.string :barcode
      t.string :description
      t.integer :quantity

      t.timestamps null: false
    end
    
    add_index :items, :barcode,                unique: true
  end
end

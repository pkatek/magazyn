class Item < ActiveRecord::Base



  validates :barcode, presence: true, length: { maximum: 32 }, uniqueness: { case_sensitive: false }
  validates :barcode, length: { minimum: 3 }
  validates :quantity, presence: true
  validates :name, presence: true

end

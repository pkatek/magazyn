class Item < ActiveRecord::Base

  validates :barcode, presence: true, length: { maximum: 32 }, uniqueness: { case_sensitive: false }
  validates :quantity, presence: true
  validates :name, presence: true

end

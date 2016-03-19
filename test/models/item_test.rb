require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def setup
    @item = Item.new(name: "Komputer", sn: "7DSDD3", barcode: "123412", description: "opis przedmiotu", quantity: "19")
  end
  
  test "barcode shuld be present" do
    @item.barcode = "    "
    assert_not @item.valid?
  end
  
  test "barcode should not be too long" do
    @item.barcode = "a" * 244
    assert_not @item.valid?
  end
  
  test "barcode should be unique" do
    duplicate_item = @item.dup
    duplicate_item.barcode = @item.barcode.upcase
    @item.save
    assert_not duplicate_item.valid?
  end
  
  test "quantity shuld be present" do
    @item.quantity = "    "
    assert_not @item.valid?
  end
  
  test "name shuld be present" do
    @item.name = "    "
    assert_not @item.valid?
  end
  
end

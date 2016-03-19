class Deldefaultvaluefromitems2 < ActiveRecord::Migration
  def change
    change_column :items, :sn, :string
  end
end

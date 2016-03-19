class Deldefaultvaluefromitems < ActiveRecord::Migration
  def change
    change_column :items, :sn, :string, :default => false
  end
end

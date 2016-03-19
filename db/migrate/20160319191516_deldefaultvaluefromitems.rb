class Deldefaultvaluefromitems < ActiveRecord::Migration
  def change
    change_column :items, :sn, :boolean, :default => false
  end
end

class Deldefaultvaluefromitems3 < ActiveRecord::Migration
  def up
      change_column_default :items, :sn, nil
    end

    def down
      change_column_default :items, :sn, 0
    end
end

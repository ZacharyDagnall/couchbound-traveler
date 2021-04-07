class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :date_travelled
      t.belongs_to :passport, null: false, foreign_key: true
      t.belongs_to :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end

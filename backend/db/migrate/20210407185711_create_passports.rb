class CreatePassports < ActiveRecord::Migration[6.1]
  def change
    create_table :passports do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :photo_url

      t.timestamps
    end
  end
end

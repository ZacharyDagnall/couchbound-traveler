class CreateCities < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :flag_url
      t.string :flag_emoji
      t.string :continent
      t.string :country
      t.string :state
      t.jsonb :food
      t.string :language
      t.string :religion
      t.string :image_key

      t.timestamps
    end
  end
end

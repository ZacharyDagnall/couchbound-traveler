class CreateCities < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :flag_url
      t.string :flag_emoji
      t.string :continent
      t.string :globe_emoji
      t.string :country
      t.string :state
      t.jsonb :food
      t.jsonb :language
      t.jsonb :religion
      t.jsonb :initial_greetings
      t.jsonb :greetings
      t.jsonb :dont_understand
      t.jsonb :ok
      t.jsonb :correct
      t.string :image_key

      t.timestamps
    end
  end
end

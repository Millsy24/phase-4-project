class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.belongs_to :owner, null: false, foreign_key: true
      t.integer :price
      t.string :street_address
      t.string :city
      t.string :state
      t.string :country
      t.string :image

      t.timestamps
    end
  end
end

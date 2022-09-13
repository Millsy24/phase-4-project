class CreateOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :owners do |t|
      t.string :name
      t.string :dob
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end

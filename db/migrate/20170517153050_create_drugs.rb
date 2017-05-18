class CreateDrugs < ActiveRecord::Migration[5.1]
  def change
    create_table :drugs do |t|
      t.string :name_main
      t.string :names_code
      t.string :names_brand
      t.string :names_generic
      t.string :mechanisms_molecular

      t.timestamps
    end
  end
end

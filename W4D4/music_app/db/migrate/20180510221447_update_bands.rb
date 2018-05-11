class UpdateBands < ActiveRecord::Migration[5.1]
  def change
    add_column :bands, :songs, :string

    add_index :bands, :songs, unique: true
  end
end

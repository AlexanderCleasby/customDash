class AddCoordsToWidgets < ActiveRecord::Migration[6.0]
  def change
    add_column :widgets, :x, :integer
    add_column :widgets, :y, :integer
    add_column :widgets, :width, :integer
    add_column :widgets, :height, :integer
  end
end

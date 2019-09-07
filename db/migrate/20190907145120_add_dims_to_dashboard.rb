class AddDimsToDashboard < ActiveRecord::Migration[6.0]
  def change
    add_column :dashboards, :width, :integer
    add_column :dashboards, :height, :integer
  end
end

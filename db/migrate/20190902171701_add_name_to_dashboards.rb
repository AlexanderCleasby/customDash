class AddNameToDashboards < ActiveRecord::Migration[6.0]
  def change
    add_column :dashboards, :name, :string
  end
end

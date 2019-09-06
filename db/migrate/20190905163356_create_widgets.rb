class CreateWidgets < ActiveRecord::Migration[6.0]
  def change
    create_table :widget do |t|
      t.string :widget_type
      t.json :ops
      t.references :dashboard, null: false, foreign_key: true
    end
  end
end

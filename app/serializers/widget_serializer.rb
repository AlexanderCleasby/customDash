class WidgetSerializer < ActiveModel::Serializer
  attributes :id, :widget_type, :x, :y, :width, :height, :ops
end

class WidgetSerializer < ActiveModel::Serializer
  attributes :id, :widget_type, :width, :height, :ops
end

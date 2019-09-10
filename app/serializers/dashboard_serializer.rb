class DashboardSerializer <  ActiveModel::Serializer
    attributes :id, :name, :width, :height
    has_many :widgets

end
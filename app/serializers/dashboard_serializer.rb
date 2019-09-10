class DashboardSerializer <  ActiveModel::Serializer
    attributes :name, :width, :height
    has_many :widgets

end
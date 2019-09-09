class DashboardSerializer <  ActiveModel::Serializer
    attributes :name
    has_many :widgets

end
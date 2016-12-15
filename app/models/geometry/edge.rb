class Geometry::Edge
  attr_reader :from, :to

  def initialize(from , to)
    @from = from
    @to = to
  end

  def offset_point_by_half_of_length(factor = 1)
    x_coordinate = (from.first + to.first) / 2
    y_coordinate = (from.last + to.last) / 2
    vx = -(from.last - to.last)
    vy =  (from.first - to.first)
    [(x_coordinate + (factor/2 * vx)),(y_coordinate + (factor/2 * vy))]
  end

  def length
    x_coordinate = (to.first - from.first)
    y_coordinate = (to.last - from.last)
    Math.sqrt(x_coordinate ** 2 + y_coordinate ** 2)
  end
end

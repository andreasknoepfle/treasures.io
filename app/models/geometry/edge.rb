class Geometry::Edge
  attr_reader :from, :to

  def initialize(from, to)
    @from = from
    @to = to
  end

  def offset_point_by_half_of_length(factor = 1)
    [(midpoint.first + (factor / 2 * vector.first)),
     (midpoint.last + (factor / 2 * vector.last))]
  end

  def length
    x_coordinate = (to.first - from.first)
    y_coordinate = (to.last - from.last)
    Math.sqrt(x_coordinate**2 + y_coordinate**2)
  end

  def midpoint
    [(from.first + to.first) / 2, (from.last + to.last) / 2]
  end

  private

  def vector
    [-(from.last - to.last), (from.first - to.first)]
  end
end

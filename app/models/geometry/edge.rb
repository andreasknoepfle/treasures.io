class Geometry::Edge
  attr_reader :from, :to

  def initialize(from, to)
    @from = from
    @to = to
  end

  def length
    x_distance = (to.first - from.first)
    y_distance = (to.last - from.last)
    Math.sqrt(x_distance**2 + y_distance**2)
  end

  def offset_point_by_half_of_length(factor = 1)
    [(midpoint.first + (factor / 2 * vector.first)),
     (midpoint.last + (factor / 2 * vector.last))]
  end

  private

  def vector
    [-(from.last - to.last), (from.first - to.first)]
  end

  def midpoint
    [(from.first + to.first) / 2, (from.last + to.last) / 2]
  end
end

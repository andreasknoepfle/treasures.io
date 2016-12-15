class Geometry::Polygon
  attr_reader :points

  def initialize(points)
    @points = points
  end

  def self.regular_polygon(center, radius, number_of_points)
    points = Array.new(number_of_points) do |item|
      w = (2 * Math::PI) / number_of_points
      x = center.first + radius * Math.cos((item * w) + 1)
      y = center.last + radius * Math.sin((item * w) + 1)
      [x, y]
    end
    new(points)
  end

  def edges
    @points.each_with_index.map do |point, i|
      if @points[i + 1].nil?
        Geometry::Edge.new(point, @points.first)
      else
        Geometry::Edge.new(point, @points[i + 1])
      end
    end
  end

  def irregular_points(distorsion_level: 30)
    @points.map do |point|
      point.map { |coordinate| distort(coordinate, distorsion_level) }
    end
  end

  private

  def distort(coordinate, distorsion_level)
    coordinate + [1, -1].sample * Random.rand(distorsion_level)
  end
end

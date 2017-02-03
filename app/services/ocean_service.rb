class OceanService
  ISLAND_SCATTER_RADIUS = 200
  CENTER = [500, 500].freeze

  def initialize(number_of_islands)
    @number_of_islands = number_of_islands
  end

  def call
    { islands: islands }
  end

  private

  def islands
    return [] if @number_of_islands.zero?
    size = island_size
    biggest_island_size = size.sort.last
    generate_positions(biggest_island_size)
      .each_with_index
      .map do |position, i|
      IslandService.new(position, size[1 - i] * 2).call
    end
  end

  def distance(edge)
    pt1 = edge.first
    pt2 = edge.last
    mx = (pt2.first - pt1.first)
    my = (pt2.last - pt1.last)
    Math.sqrt(mx * mx + my * my)
  end

  def generate_positions(biggest_island_size)
    return [make_point] if @number_of_islands == 1
    return two_positions(biggest_island_size) if @number_of_islands == 2
    polygon = Geometry::Polygon.regular_polygon(CENTER,
                                                ISLAND_SCATTER_RADIUS,
                                                @number_of_islands)
    polygon.irregular_points
  end

  def make_point
    d = 150 # minimum distance from canvas edge
    d2 = 850 # minimum distance from canvas edge
    [Random.rand(d..d2), Random.rand(d..d2)]
  end

  def island_size
    sizes = []
    until sizes.sum > 300
      @number_of_islands.times do |n|
        max2 = 150 - (20 * n)
        sizes << Random.rand(30..max2)
      end
    end
    sizes
  end

  def two_positions(biggest_island_size)
    loop do
      points = [make_point, make_point]
      return points if (2 * biggest_island_size) < distance(points)
    end
  end
end

class OceanService
  ISLAND_SCATTER_RADIUS = 200
  CENTER = [500, 500]

  def initialize(number_of_islands)
    @number_of_islands = number_of_islands
  end

  def call
    { islands: islands }
  end

  def islands
    if @number_of_islands.zero? || @number_of_islands.nil?
      []
    else
      size = island_size
      biggest_island_size = size.sort.last
      generate_positions(biggest_island_size)
        .each_with_index
        .map do |position, i|
        IslandService.new(position, size[1 - i]).call
      end
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
    if @number_of_islands == 1
      [make_point]
    elsif @number_of_islands == 2
      loop do
        points = [make_point, make_point]
        return points if (2 * biggest_island_size) < distance(points)
      end
    else
      polygon = Geometry::Polygon.regular_polygon(CENTER,
                                                  ISLAND_SCATTER_RADIUS,
                                                  @number_of_islands)
      polygon.irregular_points
    end
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
end

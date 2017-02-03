class IslandService
  ITERATIONS = 8

  def initialize(position, size)
    @position = position
    @size = size / 2
  end

  def call
    Island.new(island_polygon.points)
  end

  private

  def island_polygon
    seed_polygon = Geometry::Polygon.regular_polygon(@position,
                                                     @size,
                                                     Random.rand(3..6))
    create_island_polygon(seed_polygon, ITERATIONS)
  end

  def create_island_polygon(initial_polygon, iterations)
    iterations.times.reduce(initial_polygon) do |polygon, _|
      Geometry::Polygon.new(generate_midpoints(polygon).flatten(1))
    end
  end

  def generate_midpoints(polygon)
    polygon.edges.map do |edge|
      if edge.length < 5
        [edge.from]
      else
        distorsion_factor = [-1, 1].sample * Random.rand
        [edge.from, edge.offset_point_by_half_of_length(distorsion_factor)]
      end
    end
  end
end

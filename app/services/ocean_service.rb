class OceanService
  ITERATIONS = 8
  SEED_POLYGON_OPTIONS = { sides: 5, center: [500, 500], radius: 100 }

  def call
    inline = create_polygon
    outline = Geometry::Polygon.new(*inline.vertices)
    {
      islands:  [
        {
          points_outline: convert_to_array_points(outline.vertices),
          points_inline:  convert_to_array_points(inline.vertices)
        }
      ]
    }
  end

  private

  def make_irregular points
    points.map do |point|
      Geometry::Point[dissort(point.x), dissort(point.y)]
    end
  end

  def dissort coordinate
    coordinate + rand(200.0)
  end

  def generate_midpoint(edge)
    pt1 = edge.first
    pt2 = edge.last
    mx = (pt1.x + pt2.x) / 2
    my = (pt1.y + pt2.y) / 2
    vx = -(pt1.y - pt2.y)
    vy = (pt1.x-pt2.x)
    d = [-1, 1].sample * rand/2
    Geometry::Point[(mx + (d * vx)),(my + (d * vy))]
  end

  def convert_to_array_points(points)
    points.map { |point| [point.x, point.y] }
  end

  def generate_midpoints(edge)
    return [edge.first] if edge.length < 5
    [edge.first , generate_midpoint(edge)]
  end

  def generate_better_polygon(polygon)
    new_vertices = polygon.edges.flat_map do |edge|
      generate_midpoints(edge)
    end
    Geometry::Polygon.new(*new_vertices)
  end

  def create_polygon
    seed = Geometry::RegularPolygon.new SEED_POLYGON_OPTIONS
    irregular_vertices = make_irregular(seed.vertices)
    polygon = Geometry::Polygon.new(*irregular_vertices)
    ITERATIONS.times do
      polygon = generate_better_polygon(polygon)
    end
    polygon
  end
end

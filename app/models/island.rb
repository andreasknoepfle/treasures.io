class Island
  INTIALIZE_BOUNDING_BOX = [
    [1000, 1000],
    [0, 0]
  ].freeze
  attr_reader :outline_points, :bounding_box

  def initialize(outline_points)
    @outline_points = outline_points
    @bounding_box = calculate_bounding_box
  end

  private

  def calculate_bounding_box
    outline_points
      .inject(INTIALIZE_BOUNDING_BOX) do |bounding_box, point|
      x, y = point
      min_point, max_point = bounding_box
      min_x, min_y = min_point
      max_x, max_y = max_point
      min_x = x if x < min_x
      min_y = y if y < min_y
      max_x = x if x > max_x
      max_y = y if y > max_y
      [[min_x, min_y], [max_x, max_y]]
    end
  end
end

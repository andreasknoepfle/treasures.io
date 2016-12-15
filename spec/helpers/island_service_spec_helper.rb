module IslandServiceHelper do

  def edge(points)
    edge_points = points.push(points.shift)
    points.each_with_index.map do |point,i|
      if edge_points[i+1].nil?
        [point, edge_points.first]
      else
        [point, edge_points[i+1]]
      end
    end
  end
  
  def length(edge)
    pt1 = edge.first
    pt2 = edge.last
    mx = (pt1.last + pt2.last)
    my = (pt1.first + pt2.first)
    Math.sqrt(mx*mx + my*my)
  end
end

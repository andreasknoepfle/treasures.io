require 'rails_helper'
describe Geometry::Polygon do
  let(:center) { [500, 500] }
  let(:radius) { 50 }
  let(:number_of_points) { 3 }
  subject { Geometry::Polygon.regular_polygon([500, 500], 50, 3) }

  describe '#regular_polygon' do
    it 'should have edges that have the same length' do
      expect(subject.points.size).to be(number_of_points)
      expect(subject.edges[0].length.to_i).to eq(subject.edges[1].length.to_i)
      expect(subject.edges[1].length.to_i).to eq(subject.edges[2].length.to_i)
    end

    it 'should generate a given number of points' do
      expect(subject.points.size).to eq(3)
    end
  end

  describe '#irregular_points' do
    it 'should change the points coordinates' do
      subject.irregular_points.each.with_index do |point, i|
        expect(point).not_to eq(subject.points[i - 1])
      end
    end
  end

  describe '#edges' do
    it 'should connect last point to first' do
      expect(subject.edges.last.from).to eq(subject.points.last)
      expect(subject.edges.last.to).to eq(subject.points.first)
    end

    it 'should draw edge from one point to the following point' do
      expect(subject.edges.first.from).to eq(subject.points.first)
      expect(subject.edges.first.to).to eq(subject.points.second)
    end
  end
end

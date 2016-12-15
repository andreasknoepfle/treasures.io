require 'pry'
require 'rails_helper'

describe "IslandService" do
  island = IslandService.new([500,500],20 )

#  let(:edge) do
#    edges= edge(IslandService.new)
#    edges
#  end

  it "should be an Array" do
    expect(island.class).to be Array
  end
  it "should generate midpoint" do
    expect(Random).to receive(:rand).and_return(0)
    result = island.generate_midpoint([[0,0],[50,50]])
    binding.pry
  end
  it "should have at least 100 points" do
    island.size.should > 100
  end
  it "points should be Arrays" do
    island.each do |points|
      expect(points.class).to be Array
    end
  end

  it "coordinates should be Float" do
    island.each do |points|
      points.each do |coordinates|
        expect(coordinates.class).to be Float
      end
    end
  end

  it "should only have points within the allowed area (1000x1000)" do
    values = island.flatten
    values.each do |val|
      expect(val < 950 && val > 50).to be true
    end
  end

  it "should only have edges that are shorter than 5" do
     edges.each do |one|
       expect(send(:edge_length,one)).to be < 5
     end
  end
end

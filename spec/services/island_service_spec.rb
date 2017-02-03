require 'pry'
require 'rails_helper'

describe 'IslandService' do
  let(:size) { 200 }
  let(:center_coordinate) { 500 }
  let(:service) do
    IslandService.new([center_coordinate, center_coordinate], size)
  end
  let(:island) { service.call }
  let(:outline) { island.outline_points }

  it 'produces islands with at least 100 points' do
    expect(outline.size).to be > 100
  end

  it 'only produces islands within the ocean (1000x1000)' do
    outline.each do |point|
      point.each do |coordinate|
        expect(coordinate).to be < (center_coordinate + size)
        expect(coordinate).to be > (center_coordinate - size)
      end
    end
  end
end

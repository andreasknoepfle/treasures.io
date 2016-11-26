require 'rails_helper'
require 'pry'
describe OceanService do
  subject { OceanService.new.call }
  let(:generated_islands) { subject[:islands] }

  it 'should generate at least one island' do
    expect(generated_islands).not_to be_empty
  end

  it 'should generate an outline and a inline of points' do
    generated_islands.each do |island|
      [:points_inline, :points_outline].each do |key|
        expect(island).to have_key(key)
      end
    end
  end

  it 'should have at least 100 array points as outlines and inlines' do
    generated_islands.each do |island|
      expect(island[:points_inline].size).to be > 100
      expect(island[:points_outline].size).to be > 100
    end
  end
end

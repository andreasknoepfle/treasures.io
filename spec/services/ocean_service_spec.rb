require 'rails_helper'
require 'pry'
describe OceanService do
  subject { OceanService.new(number_of_islands).call }
  let(:number_of_islands) { 2 }
  let(:generated_islands) { subject[:islands] }

  it 'should generate at least one island' do
    expect(generated_islands).not_to be_empty
  end

  it 'should generate multiple islands' do
    expect(generated_islands.size).to be > 1
  end

  context 'when called with 3' do
    let(:number_of_islands) { 3 }
    it 'should generate the 3 islands' do
      expect(generated_islands.size).to eq 3
    end
  end

  it 'should have at least 100 array points as outlines and inlines' do
    generated_islands.each do |island|
      expect(island.size).to be > 100
    end
  end
end

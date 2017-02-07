require 'rails_helper'
describe Geometry::Edge do
  let(:from) { [0, 0] }
  let(:to) { [10, 10] }
  subject { Geometry::Edge.new(from, to) }

  it 'should calculate length' do
    expect(subject.length).to eq 14.142135623730951
  end

  context 'with vector'
  let(:vector) { [10, -10] }

  it 'should offset the midpoint' do
    expect(subject.offset_point_by_half_of_length(0)).to eq [5, 5]
    expect(subject.offset_point_by_half_of_length(0.5)).not_to eq [5, 5]
  end
end

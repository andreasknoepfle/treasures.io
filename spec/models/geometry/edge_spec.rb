require 'rails_helper'
describe Geometry::Edge do
  let(:from) { [0, 0] }
  let(:to) { [10, 10] }
  subject { Geometry::Edge.new(from, to) }

  it 'should calculate length' do
    expect(subject.length).to eq 14.142135623730951
  end

  describe '#offset_point_by_half_of_length' do
    let(:vector) { [10, -10] }

    context 'with default factor' do
      it 'should offset the midpoint' do
        expect(subject.offset_point_by_half_of_length).to eq [5, 5]
      end
    end

    context 'with a factor of  0,5' do
      it 'should offset the midpoint' do
        expect(subject.offset_point_by_half_of_length(0.5)).to eq [7.5, 2.5]
      end
    end
  end
end

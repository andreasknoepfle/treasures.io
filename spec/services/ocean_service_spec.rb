require 'rails_helper'
require 'pry'
describe OceanService do
  subject { OceanService.new(number_of_islands).call }

  let(:generated_islands) { subject[:islands] }

  shared_examples_for 'generates islands with the island service' do
    it 'generates islands with the island service' do
      island_service = double
      expect(IslandService)
        .to(receive(:new).exactly(number_of_islands)
                         .times
                         .and_return(island_service))
      expect(island_service)
        .to(receive(:call).exactly(number_of_islands)
                          .times
                          .and_return('an island'))
      generated_islands.each do |island|
        expect(island).to eq 'an island'
      end
    end

    it 'generates island objects' do
      generated_islands.each do |island|
        expect(island).to be_a Island
      end
    end

    it 'generates the right amount of islands' do
      expect(generated_islands.size).to eq number_of_islands
    end
  end

  context 'with 0 islands' do
    let(:number_of_islands) { 0 }

    it 'generates two islands' do
      expect(generated_islands).to be_empty
    end
  end

  context 'with 1 islands' do
    let(:number_of_islands) { 1 }

    it_behaves_like 'generates islands with the island service'
  end

  context 'with 2 islands' do
    let(:number_of_islands) { 2 }

    it_behaves_like 'generates islands with the island service'
  end

  context 'with more than 2 islands' do
    let(:number_of_islands) { 5 }

    it_behaves_like 'generates islands with the island service'
  end
end

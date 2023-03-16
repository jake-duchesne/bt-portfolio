class Footer < BaseComponent
  attr_reader :links

  def initialize(links:)
    @links = links
  end
end

class UI::Navigation::MobileLink < BaseComponent
  attr_reader :title, :href

  def initialize(title, href)
    @title, @href = title, href
  end
end

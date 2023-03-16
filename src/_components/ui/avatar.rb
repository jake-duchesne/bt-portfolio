class UI::Avatar < BaseComponent
  def initialize(large: false)
    @large = large
  end

  def large?
    !!@large
  end
end

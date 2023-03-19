class WorkCard < BaseComponent
  renders_one :description
  renders_one :content_section
  renders_one :tech

  def initialize(company:, location:, role:, start_date:, end_date: nil, current: false)
    @company, @location, @role, @start_date, @end_date, @current = company, location, role, start_date, end_date, current
  end
end

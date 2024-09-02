class ObjectTypes::Pagination < Types::BaseObject
  field :results_count, Int, null: false
  def results_count
    object.count
  end

  field :total_count, Int, null: false
  def total_count
    object.total_count
  end

  field :total_pages, Int, null: false
  def total_pages
    object.total_pages
  end

  field :current_page, Int, null: false
  def current_page
    object.current_page
  end

  field :current_count, Int, null: false
  def current_count
    if object.last_page?
      object.total_count
    else
      object.current_page * object.count
    end
  end

  field :next_page, Int, null: true
  def next_page
    object.next_page
  end

  field :previous_page, Int, null: true
  def previous_page
    object.prev_page
  end

  field :has_next_page, Boolean, null: false
  def has_next_page
    !object.last_page?
  end

  field :has_previous_page, Boolean, null: false
  def has_previous_page
    !object.first_page?
  end
end

class Types::DateTimeType < Types::BaseScalar

  def self.coerce_input(value, _ctx)
    Time.zone.parse(value.to_s)
  end
  def self.coerce_result(value, _ctx)
    value.utc.iso8601
  end
end

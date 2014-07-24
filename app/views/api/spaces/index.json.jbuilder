json.array!(@spaces) do |space|
  json.partial!("space", :space => space)
end

json.extract! @space, :id, :title, :description, :price, :location, :about
json.cover_photo @space.photo_preview.url(:big)
json.user_avatar @space.user.avatar.url(:big)
json.user_id @space.user.id
json.user_name @space.user.first_name

json.review @space.reviews do |review|
  json.extract! review, :id, :text
  json.author do
    json.id review.author.id
    json.author_name review.author.first_name
    json.author_avatar review.author.avatar.url(:small)
  end
end

json.bookings @space.bookings.where('status = ?', 'APPROVED') do |booking|
  json.extract! booking, :id, :check_in, :check_out
end

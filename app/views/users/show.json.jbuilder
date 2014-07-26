json.(@user, :id, :first_name, :last_name)
json.avatar(@user.avatar.url(:big))

json.review @user.reviews do |review|
  json.extract! review, :id, :text
  json.author do
    json.author_avatar review.author.avatar.url(:small)
  end
end

json.booking @user.bookings do |booking|
  json.extract! booking, :id, :check_in, :check_out, :status
  json.space do
    json.title booking.space.title
    json.cover_photo booking.space.photo_preview.url
  end
end

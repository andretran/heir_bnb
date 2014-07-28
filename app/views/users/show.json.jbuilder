json.(@user, :id, :first_name, :last_name)
json.avatar(@user.avatar.url(:big))

json.review @user.reviews do |review|
  json.extract! review, :id, :text
  json.author do
    json.author_avatar review.author.avatar.url(:small)
  end
end

json.requests @user.requests do |request|
  json.extract! request, :id, :check_in, :check_out, :status
  json.space do
    json.id request.space.id
    json.title request.space.title
    json.price request.space.price
    json.cover_photo request.space.photo_preview.url(:small)
  end

  json.user do
    json.id request.user.id
    json.name request.user.first_name
    json.avatar request.user.avatar.url(:medium)
  end
end

json.listings @user.spaces do |space|
  json.extract! space, :id, :title, :price, :description
  json.cover_photo space.photo_preview.url(:small)
end

json.bookings @user.bookings do |booking|
  json.extract! booking, :id, :check_in, :check_out, :status
  json.space do
    json.id booking.space.id
    json.title booking.space.title
    json.price booking.space.price
    json.cover_photo booking.space.photo_preview.url(:small)
  end
end

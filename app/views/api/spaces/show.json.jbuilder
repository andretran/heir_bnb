json.extract! @space, :id, :title, :description, :price
json.cover_photo @space.photo_preview.url(:big)
json.user_avatar @space.user.avatar.url(:medium)
json.user_id @space.user.id
json.user_name @space.user.first_name

json.review @space.reviews do |review|
  json.extract! review, :id, :text
  json.author do
    json.id review.author.id
    json.author_avatar review.author.avatar.url(:small)
  end
end

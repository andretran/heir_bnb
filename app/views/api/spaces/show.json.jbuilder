json.extract! @space, :id, :title, :description, :price
json.cover_photo @space.photo_preview.url(:big)
json.user_avatar @space.user.avatar.url(:medium)

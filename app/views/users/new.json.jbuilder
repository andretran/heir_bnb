json.(user, :id, :first_name, :last_name)
json.cover_photo(space.photo_preview.url(:small))
json.user_avatar(space.user.avatar.url(:small))

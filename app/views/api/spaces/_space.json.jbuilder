json.(space, :id, :title, :description, :price, :created_at, :updated_at)
json.cover_photo(space.photo_preview.url(:small))
json.user_avatar(space.user.avatar.url(:small))


#
# photo_preview ||= nil
# unless photo_preview.nil?
#   json.photo_preview(photo_preview) do |photo_preview|
#     json.partial!("api/photo_previews/photo_preview", :photo_preview => photo_preview)
#   end
# end
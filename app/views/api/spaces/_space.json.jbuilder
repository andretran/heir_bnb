json.(space, :id, :title, :description, :price, :created_at, :location, :about, :updated_at, :latitude, :longitude)
json.cover_photo(space.photo_preview.url(:small))
json.user_avatar(space.user.avatar.url(:small))
#
# json.bookings space.bookings do |booking|
#   json.extract! booking, :id, :check_in, :check_out
# end


#
# photo_preview ||= nil
# unless photo_preview.nil?
#   json.photo_preview(photo_preview) do |photo_preview|
#     json.partial!("api/photo_previews/photo_preview", :photo_preview => photo_preview)
#   end
# end

json.(@user, :id, :first_name, :last_name)
json.avatar(@user.avatar.url(:big))

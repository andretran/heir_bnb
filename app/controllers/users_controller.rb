class UsersController < ApplicationController
  def new; end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(current_user);
    render :json => @user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end

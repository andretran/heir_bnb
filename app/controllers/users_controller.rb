class UsersController < ApplicationController
  def new; end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ['Please make sure to fill in all the fields.']
      render :new
    end
  end

  def update
    @user = User.find(params[:id])
    @user.set_filename(params[:filename])
    @user.avatar = (params[:avatar])
    if @user.update_attributes(user_params)
        render 'show.json.jbuilder'
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @user = User.all
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render 'show.json.jbuilder'
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end

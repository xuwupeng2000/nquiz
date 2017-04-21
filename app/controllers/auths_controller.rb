class AuthsController < ApplicationController
  include Rails.application.routes.url_helpers

  def create
    @team = Team.find(params[:team_id])

    if @team.pass == params[:pass].join
      @url = team_quiz_sessions_path(@team)
      session[:team] = @team 
      render :create, status: 200
    else
      @url = root_path
      render :create, status: 503
    end
  end

end

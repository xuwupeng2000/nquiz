class TeamsController < ApplicationController

  def index
    @teams = Team.all
  end

  def create
    @team = Team.new(team_params)
    @team.save!

    redirect_to teams_path
  end

  def new
    @team = Team.new
  end

  def edit
    @team = Team.find(params[:id])
  end

  def update
    @team = Team.find(params[:id])
    @team.update!(team_params)

    redirect_to @team
  end

  def destory
    @team = Team.find(params[:id])
    @team.destory!
  end

  private

  def team_params
    params.require(:team).permit!
  end


end

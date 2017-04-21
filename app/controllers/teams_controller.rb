class TeamsController < ApplicationController

  def index
    @teams = Team.all
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      redirect_to teams_path
    else
      render :new
    end
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

  def destroy
    @team = Team.find(params[:id])
    @team.destroy!

    redirect_to action: :index
  end

  private

  def team_params
    params.require(:team).permit!
  end


end

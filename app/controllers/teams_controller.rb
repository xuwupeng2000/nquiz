class TeamsController < ApplicationController

  def index
    @teams = Team.all
  end

  def create
    @team = Team.new(name: team_params[:name], description: team_params[:description], password: team_params[:pass_number])

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

    if @team.update(name: team_params[:name], description: team_params[:description], password: team_params[:pass_number])
      flash[:notice] = 'You team detail has been updated'
      redirect_to root_path
    else
      render :edit
    end
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

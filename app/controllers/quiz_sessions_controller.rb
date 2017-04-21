class QuizSessionsController < ApplicationController

  def index
    @team = Team.find(params[:team_id])
    @sessions = QuizSession.where(team: params[:team_id]).all
  end

  def new
    @team = Team.find(params[:team_id])
    @session = @team.quiz_sessions.build
  end

  def create
    @team = Team.find(params[:team_id])
    @session = QuizSession.new(quiz_session_params)

    if @session.save
      redirect_to action: :index
    else
      render :new
    end
  end

  private

  def quiz_session_params
    params.require(:quiz_session).permit!
  end
end

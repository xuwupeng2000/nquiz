class QuizSessionsController < ApplicationController
  before_action :require_team_session

  def index
    @team = Team.find(params[:team_id])
    @sessions = QuizSession.where(team: params[:team_id]).all

    if @sessions.any?
      total = @sessions.map{|e| e.correct_quiz_number.to_f/e.total_quiz_number.to_f}
        .reduce(:+)
      overall_accuracy = (total/@sessions.size).to_f.round(2)
      @series = [ {"values":[overall_accuracy * 100], "text":"Correct #{overall_accuracy}"}, {"values":[( 1 - overall_accuracy ) * 100], "text": "Incorrect #{(1 - overall_accuracy).round(2)}"} ]
    else
      @series =[]
    end

  end

  def new
    @team = Team.find(params[:team_id])
    @session = @team.quiz_sessions.build
  end

  def create
    @team = Team.find(params[:team_id])
    @session = @team.quiz_sessions.build(quiz_session_params)

    if @session.save
      redirect_to action: :index
    else
      render :new
    end
  end

  def destroy
    @team = Team.find(params[:team_id])
    @session = @team.quiz_sessions.find(params[:id])
    @session.destroy!
  end

  private

  def quiz_session_params
    params.require(:quiz_session).permit!
  end

  def require_team_session
    team = session[:team]
    @team = Team.find(params[:team_id])
    if session[:team] && session[:team]['pass'] == @team.pass 
    else
      flash[:error] = "Can not let you do that !"
      redirect_to root_path and return
    end
  end
end

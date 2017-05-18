class DrugsController < ApplicationController
  def index
    @drugs = Drug.all
    if params[:search]
      @drugs = Drug.search(params[:search]).order("created_at DESC")
      if params[:suggest]
        render :json => @drugs and return
      end
    else
      @drugs = Drug.all.order("created_at DESC")

    end
  end

  def new
  end

  def create
    @drug = Drug.new(drug_params)

    @drug.save
    redirect_to @drug
  end

  def show
    @drug = Drug.find(params[:id])

    if !@drug
      render 'index'
    end
  end

  private

    def drug_params
      params.require(:drug).permit(:name_main, :names_code, :names_brand, :names_generic, :mechanisms_molecular)
    end
end

class ItemsController < ApplicationController
  
  def index
    @items = Item.all
  end
  
  def show
    @item = Item.find(params[:id])
  end
  
  def new
    @item = Item.new
  end
  
  def create
    @item = Item.new(item_params)
	
    if @item.save
      flash[:success] = "Przedmiot dodany!"
      redirect_to :action => 'index'
    else
      flash.now[:alert] = @item.errors.full_messages.join("<br>").html_safe
      render action: "new"
    end
   
  end
  
  def edit
    @item = Item.find(params[:id])
  end
  
  def update
    @item = Item.find(params[:id])
	
       if @item.update_attributes(item_param)
          redirect_to :action => 'show', :id => @item
       else
          render :action => 'edit'
       end
  end
  
  def delete
     Item.find(params[:id]).destroy
     redirect_to :action => 'index'
  end
  
  private  
  
  
  def item_params
    params.require(:item).permit(:name, :sn, :quantity, :description, :barcode)
  end
end


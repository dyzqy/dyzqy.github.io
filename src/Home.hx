package ;

import haxe.ui.containers.VBox;
import haxe.ui.events.MouseEvent;
import openfl.display.StageQuality;

@:build(haxe.ui.ComponentBuilder.build("assets/home.xml"))
class Home extends VBox 
{
    public function new() 
    {
        super();
        trace(stage);
    }
    
}
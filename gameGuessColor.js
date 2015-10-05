var arrColor=["red","blue","yellow","violet","black","white","orange","brown","pink","purple"]
arrColor.sort();
var myColor="red";
var countLeft=arrColor.length/2;
var userChoice=prompt("Guess color?" + "\n" + "Colors are:" + " " + arrColor[0] + ", " + arrColor[1] 
		+ ", " + arrColor[2] + ","+ "\n" + arrColor[3] + ", " + arrColor[4] + ", " + arrColor[5] + 
		", " + 	arrColor[6] + "\n" + arrColor[7] + ", " + arrColor[8] + ", " + arrColor[9] + "."
		 + "\n" + "Counter of attempts:" + countLeft);
for (var counter=0; counter<arrColor.length/2;counter++)
{
	if(myColor===userChoice){
		confirm("Success!" + "\n" + "You used only" + " " + counter+1 + " " + "attempts");
		break;
	}
	else{
		countLeft=arrColor.length/2-1-counter;
		if (countLeft===0){
			alert("You losed");
		}
		else{
			if(userChoice<myColor){
				userChoice=prompt("Colour is higher." + "\n" + "Count of left attempts:" + " " + countLeft); 
			}
			else{
				userChoice=prompt("Colour is lower." + "\n" + "Count of left attempts:" + " " + countLeft); 
			}
		}
	}
}
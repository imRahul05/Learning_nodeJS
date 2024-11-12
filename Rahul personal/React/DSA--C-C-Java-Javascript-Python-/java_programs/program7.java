
import java.util.Scanner;
interface Rectangle{
	void areaRect();
	
}
interface Triangle {
	void areaTriangle();
}
class Shapes implements Rectangle,Triangle{
	Scanner sc= new Scanner(System.in);
	public void areaRect() {
		int l,b;
		System.out.println("Enter the length of the rectagle :");
		l=sc.nextInt();
		System.out.println("Enter the breath of the rectagle :");
		b=sc.nextInt();
		System.out.println("Area of rectangle is " +(l*b));
	}
	public void areaTriangle() {x
		int ba,h;
		System.out.println("Enter the base value  of the Triagle :");
		ba=sc.nextInt();
		System.out.println("Enter the Height of Triangle :");
		h=sc.nextInt();
		System.out.println("Area of Triagle  " +(0.5*ba*h));
		
	}
}

public class program7 {

	public static void main(String[] args) {
	
		Shapes s = new Shapes();
		s.areaRect();
		s.areaTriangle();

	}

}
import java.util.Scanner;
interface Rectangle{
    void rect();
}x
interface Triangle{
    void tri();
}
class Shapes implements Rectangle,Triangle{
    Scanner sc=new Scanner(System.in);
    public void rect(){
        int l,b;
        System.out.println("Enter Breadth of rectangle:-");
        b=sc.nextInt();
        System.out.println("Enter Length:");
        l=sc.nextInt();
        System.out.println("Area of Rectangle:"+ (l*b));
    }
    public void tri(){
        int ba,h;
        System.out.println("Enter Base of Triangle:");
        ba=sc.nextInt();
        System.out.println("Enter Height of Triangle");
        h=sc.nextInt();
        System.out.println("Area of Triangle:" + (0.5*ba*h));
    }
}
public class P1{
     public static void main(String[] args){
         Shapes zoro = new Shapes();
         zoro.rect();
         zoro.tri();
     }
}
import java.util.Scanner;
interface one{
    void get();
}
interface two extends one{
    void print();
}
class ninja implements two{
    Scanner sc= new Scanner(System.in);
    int a;
    public void get(){
        System.out.println("Enter a Number:");
        a=sc.nextInt();
    }
    public void print(){
        System.out.println(a);
    }
}
public class interface_ext {
    public static void main(String[] args){
        ninja x= new ninja();
        x.get();
        x.print();

    }
}

// import java.io.*
import java.util.*;

class A{
    static int fact(int n){
        if(n==0||n==1)
        return 0;
        return n*fact(n-1);
    }
}
public class test{
    public static void main(String[] args){
        fact(5);
        A obj = new A();
        System.out.println("factorial of 5="+ );
    }
}
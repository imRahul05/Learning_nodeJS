interface abc{
    void a();
    void b();
    void c();
}
abstract class B implements abc{
    public void c(){
        System.out.println("Hi From Method C");
    }
}

class D implements abc{
    public void a(){
        System.out.println("hello Eveyone From Method A");
    }
    public void b(){
        System.out.println("Method B");
    }
     public void c(){
        System.out.println("Hi From Method C");
    }
}
public class test01{
    public static void main(String[] args){
         abc x = new D();// x ia variable for inteface that acts as a refrence for class B
         x.a();
         x.b();
         x.c();
    }
} 
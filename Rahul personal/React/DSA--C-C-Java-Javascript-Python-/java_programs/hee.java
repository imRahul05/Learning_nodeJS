public class A{
    A(){
        System.out.println("Welcome ");
    }
    A(String name){
        System.out.println(name);
    }
    void dis(int x){
        System.out.println(x);
    }
    void dis(int x,int y){
        System.out.println(x + "," +  y);
    }
}

class hee {
    public static void main(String[] args){
        new  A();
        new A("rahul");
        A obj = new A();
        obj.dis(234);
        obj.dis(23,56565);
    }
}
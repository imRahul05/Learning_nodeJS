class A{
    A(){
        System.out.println("Welcome ");
    }
    A(String name){
        System.out.println(name);
    }
}
class B{
    A(int x){
        System.out.println(x);
    }
    A(int x,int y){
        System.out.println(x + "," + y);
    }
}

class P2 {
    public static void main(String[] args){
        new  A();
        new A("rahul");
        B obj = new B();
        obj.A(234);
        obj.A(23,56565);
    }
}
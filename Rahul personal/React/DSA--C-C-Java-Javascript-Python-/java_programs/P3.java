class Outer{
    private int a=10;
    void show(){
        System.out.println("The value of variable a in Outer class:"+a);
    }
    class Inner{
      private  int a=30;
       void dis(){
       System.out.println("the value of variable a in Inner class:"+ a);
       }
    }

}
public class P3{
    public static void main(String[] args){
        Outer obj = new Outer();
        obj.show();
        Outer.Inner obj1 = obj.new Inner();
        obj1.dis();
    }
}

//consider bottle as a interface ,liquid as class

interface bottle{
    void fill();
    void empty();
    void drink();
}
class liquid implements bottle{
    public void fill(){
        System.out.println("For Filling it");
    }
    public void empty(){
        System.out.println("For Empty it");
    }
    public void drink(){
        System.out.println("For Drink and Drive purpose");
    }
}
class main{
    public static void main(String[] args){
        bottle x= new liquid();
        x.fill();
        x.empty();
        x.drink();
    }
}
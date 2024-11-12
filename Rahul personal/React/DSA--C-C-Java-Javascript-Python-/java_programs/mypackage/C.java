class human{
    void job(){
    
            System.out.println("Human");

    }
}
class doctor extends human{
      public void job(){
        System.out.println("Doctor");
      }
}
class teacher extends human{
    public void job(){
        System.out.println("teacher");
      }


    public static void main(String[] args){
        human x = new human();
        x.job();
        doctor A= new doctor();
        A.job();
        teacher B= new teacher();
        B.job();
        

}
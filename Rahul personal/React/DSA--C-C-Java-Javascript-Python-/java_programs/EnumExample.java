// WAP to demostarte enum using switch case JAVA
// An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables).
public class EnumExample{
   enum day{
    sunday,monday,tuesday,wednesday,thrusday,friday,saturday
   }
   public static void main(String[] args){
      
      day today=day.tuesday;
      switch(today){
        case monday:System.out.println("Today is MonDay");
        break;

        case tuesday:System.out.println("Today is TuesDay");
        break;

        case wednesday:System.out.println("Today is Wednesday");
        break;

        case thrusday:System.out.println("Today is ThrusDay");
        break;

        case friday:System.out.println("Today is FriDay");
        break;

        case saturday:System.out.println("Today is SaturDay");
        break;

        case sunday:System.out.println("Today is SunDay");
        break;
      }

     
   }
}
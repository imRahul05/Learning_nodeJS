interface HillStation {
    void location();
    void famous_for();
}

class Manali implements HillStation {
    @Override
    public void location() {
        System.out.println("Manali is located in Himachal Pradesh, India.");
    }

    @Override
    public void famous_for() {
        System.out.println("Manali is famous for its scenic beauty and adventure sports.");
    }
}

class Mussorie implements HillStation {
    @Override
    public void location() {
        System.out.println("Mussoorie is located in Uttarakhand, India.");
    }

    @Override
    public void famous_for() {
        System.out.println("Mussoorie is famous for its pleasant climate and picturesque landscapes.");
    }
}

class Gulmarg implements HillStation {
    @Override
    public void location() {
        System.out.println("Gulmarg is located in Jammu and Kashmir, India.");
    }

    @Override
    public void famous_for() {
        System.out.println("Gulmarg is famous for its skiing and snowboarding opportunities.");
    }
}
class z {
    public static void main(String[] args) {
        Manali A = new Manali();
        A.location();
        A.famous_for();
        Mussorie B = new Mussorie();
        B.location();
        B.famous_for();
        Gulmarg C = new Gulmarg();
        C.location();
        C.famous_for();


    }
}
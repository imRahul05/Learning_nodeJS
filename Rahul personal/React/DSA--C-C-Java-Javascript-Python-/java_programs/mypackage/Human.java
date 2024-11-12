
class Human {
    void job() {
        System.out.println("Humans perform various jobs.");
    }

    public static void main(String[] args) {
        Human human = new Human();
        human.job(); // Output: Humans perform various jobs.

        Teacher teacher = new Teacher();
        teacher.job(); // Output: A teacher educates and imparts knowledge to students.

        Doctor doctor = new Doctor();
        doctor.job(); // Output: A doctor diagnoses, treats, and cares for patients' health.
    }
}

class Teacher extends Human {
    @Override
    void job() {
        System.out.println("A teacher educates and imparts knowledge to students.");
    }
}

class Doctor extends Human {
    @Override
    void job() {
        System.out.println("A doctor diagnoses, treats, and cares for patients' health.");
    }
}

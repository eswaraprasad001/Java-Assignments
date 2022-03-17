package studentDetails;

import java.io.FileWriter;
import java.io.IOException;
import java.io.* ;
import java.util.Scanner;
public class Main {
    //
    static class NameNotValidException extends Exception
    {
        public String validname()
        {
            return ("Name is not Valid..Please ReEnter the Name");
        }
    }
    //

    public static Student createStudent() {
        Student s1;
        Department d1;
        Scanner sc = new Scanner(System.in);
        s1 = new Student();
        d1 = new Department();
        System.out.println("Enter the Department id:");
        int did = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the Department name:");
        String dname = sc.nextLine();
        System.out.println("Enter the Student id:");
        int sid = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the Student name:");
        String sname = sc.nextLine();
        //
        int temp=0;
        for(int i=0;i<sname.length();i++)
        {
            char ch;
            ch=sname.charAt(i);
            if(ch<'A' || ch>'Z' && ch<'a' || ch>'z')
                temp=1;
        }
        //
        try
        {
            if(temp==1)
                throw new NameNotValidException();

        }
        catch(NameNotValidException e2)
        {
            System.out.println(e2);
        }
        //


        System.out.println("Enter the Student Address:");
        String sadd = sc.nextLine();
        d1.setDid(did);
        d1.setDname(dname);
        s1.setSid(sid);
        s1.setSname(sname);
        s1.setDepartment(d1);
        s1.setAddress(sadd);
        return s1;
    }

    public static void main(String args[]) {
        Student s1 = Main.createStudent();
//        System.out.println("Department id:" + s1.getDepartment().getDid());
//        System.out.println("Department name:" + s1.getDepartment().getDname());
//        System.out.println("Student id:" + s1.getSid());
//        System.out.println("Student name:" + s1.getSname());
//        System.out.println("Student Address:"+s1.getAddress());

        try {
            FileWriter myWriter = new FileWriter("StudentDetails.txt");
            myWriter.write("Department id:" + s1.getDepartment().getDid());
            myWriter.write("Department name:" + s1.getDepartment().getDname());
            myWriter.write("Student id:" + s1.getSid());
            myWriter.write("Student name:" + s1.getSname());
            myWriter.write("Student Address:"+s1.getAddress());
            myWriter.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
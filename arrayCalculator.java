package javaExamples;
import java.util.*;
import java.lang.*;

public class arrayCalculator {



    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 3;
        List<String> list1 = new ArrayList<String>();
        System.out.println("Enter the elements of the array: ");
        for (int i = 0; i < n; i++) {

            String s = sc.nextLine();
            list1.add(s);
        }

        String s = list1.get(1);
        try {
            switch (s) {
                case "+":
                    int a = Integer.parseInt(list1.get(0)) + Integer.parseInt(list1.get(2));
                    System.out.println(a);
                    break;
                case "-":
                    int b = Integer.parseInt(list1.get(0)) - Integer.parseInt(list1.get(2));
                    System.out.println(b);
                    break;
                case "*":
                    int c = Integer.parseInt(list1.get(0)) * Integer.parseInt(list1.get(2));
                    System.out.println(c);
                    break;
                case "/":
                    int d = Integer.parseInt(list1.get(0)) / Integer.parseInt(list1.get(2));
                    System.out.println(d);
                    break;
                default:
                    System.out.println("Invalid Operator");

            }
        }
        catch(NumberFormatException e){
            System.out.println("Provide a Proper Operand");
        }
        catch(ArithmeticException e)
        {
            System.out.println("Arithmetic Exception occurs");
        }

    }
}

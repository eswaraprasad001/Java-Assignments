package javaExamples;

import java.util.ArrayList;
import java.util.Scanner;

public class swapArray {

    public static void main(String args[]) {

        int i, t;
        Scanner obj = new Scanner(System.in);
        System.out.println("enter the number of elements ");
        int n = obj.nextInt();
        ArrayList<Integer> arr = new ArrayList<>();

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the numbers:");

        for (i = 0; i < 6; i++) {
            int a = sc.nextInt();
            arr.add(a);
        }

        i = 0;
        while (i < 6 - 1) {
            t = arr.get(i);
            arr.set(i,i+1);
            arr.set(i+1,t);
            i = i + 2;
        }

        System.out.print("After swap list are:");
        for (i = 0; i < 6; i++) {
            System.out.print(" " + arr.get(i));
        }

    }

}

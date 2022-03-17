package javaExamples;

import java.util.*;
import java.util.Collections;
public class arraylist {

    public static void main(String[] args) {

        Scanner obj = new Scanner(System.in);
        System.out.println("enter the number of elements to ");
        int n = obj.nextInt();

        ArrayList<Integer> arr = new ArrayList<>();
        System.out.println("Enter the Elements of the array");
        for (int i = 0; i < n; i++) {

            int element = obj.nextInt();

            arr.add(element);

        }

        for (int i = 0; i < n - 1; i += 2) {
            Collections.swap(arr, i, i + 1);
        }
        System.out.println(arr);


    }

}
